class Department {
    // name:string;
   protected employees:string[]=[];
    //readonly mi permette di creare che nn deve essere mai cambiata la variabile
    constructor(public readonly name:string,public id:string) {  //se un argomento è definito public o private non devo dichiararlo viene creato automaticamente da typescript

        // this.name =n;


    }
    //accedo con Department.createEmployee anche dentro la classe non con this. , lo stesso vale per le proprietà
    static createEmployee (name:string){
        return {name:name}
    }

    describe(this:Department){  // posso solo chiamare describe su istanze del dipartimento perche definisco chi puo accedere a dipartimento

        console.log(this.name+",nome del dipartimento, con id:"+this.id)
    }

    addEmployee(employee:string){
     this.employees.push(employee);
    }

    getEmployees(){
        return this.employees;
    }


}

class ITDepartment extends Department {
    constructor(id:string,public admin:string[]) {
       super("Dipartimento it",id);
        
   }

}

abstract class HRDepartment extends Department {
    private lastReport:string;
    private menager:string="";
    constructor(menager:string,id:string){
        super("HRDepartment",id);
        this.menager=menager
        this.lastReport="Text Report"
    }
    changeMenager(man:string){
        this.menager=man
    }
    getManager(){
        return this.menager;
    }
    
    addEmployee(name:string){
        this.employees.push(name);

    }
  //funzione astratta 
    abstract createSpecializedMenager(name:string):void;

    

    get mostRecentReport(){
        if(this.lastReport){

            return this.lastReport
        }
        else throw new Error("nessun report!!")
    }
    
    set mostRecentReport(report:string){
        if(report===''){
            throw new Error("inserire un report valido");
        }
        this.lastReport=report
    }

} 

class HRspecialDep extends HRDepartment {
    constructor(name:string,id:string){
        super(name,id);
    }
    createSpecializedMenager(nome:string){
        console.log(nome)
    }
}

class ClasseSegretaSingleton {
    private static istanza:ClasseSegretaSingleton //accessibile solo dentor la classe
    private lastReport: string;
    
   

    private constructor(lastReport:string){
       this.lastReport=lastReport;
    }
    
    get lastReportval(){
        return this.lastReport;
    }

    static getInstance(){
        if(ClasseSegretaSingleton.istanza){
            return this.istanza;
        }
        else{
            this.istanza = new ClasseSegretaSingleton("nome report")
            return this.istanza
        }
    }



}

 // quello che cambia usando get è che posso accedere  ad un valore come 
 //se fosse una proprietà


const accounting = new Department('Accounting',"reparto segreto");
const itDepartment = new ITDepartment("it01",["carletto","giovanni"])
const hrDepartment = new HRspecialDep("caschmiro","hr01");

accounting.addEmployee("giovanni");
console.log(accounting.getEmployees)
console.log(hrDepartment.mostRecentReport);
hrDepartment.mostRecentReport="report di fine settimana";
console.log(Department.createEmployee("massimilian")); // metodi statici
console.log(accounting)


//uso del singleton:
const istanza = ClasseSegretaSingleton.getInstance();

console.log(istanza);