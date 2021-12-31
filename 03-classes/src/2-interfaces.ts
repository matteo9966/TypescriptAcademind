//descrive come è la struttura di un oggetto
//definisco solo la struttura 

interface  Named{
    //quel punto interrogativo significa che implementare greet è opzionale
    greetAndSayName?(name:string):void
}

interface Greetable extends Named {
   readonly name:string;
    age:number;
  greet(name:string):void

} 


//definisco person in questomodo è come se fosse una tipo 
type PersonCustom ={
    name:string;
    age:number;
  greet(name:string):void
} 
//interface server per definire la struttura di un oggetto. si definisce un interfaccia non un customTYPE
/* interface è un contratto quasi, un oggetto che  */

let user1:Greetable;

user1 ={
    name:'matteo',
    age:25,
    greet(frase:string){
        return console.log(frase)
    },
    greetAndSayName(name:string){
        console.log("ciao"+name);
    }
}



//implements per definire in che modo una classe deve essere definita

class Senior implements Greetable{
    constructor(public name:string,public age:number){

    }
    greet(){
     console.log("ciao sono  il senior");
    }
    greetAndSayName(name:string){ //implemento la classe che ho definito named
        console.log("ciao"+name);
    }
}

//sostanzialmente definisce come deve essere una classe una sorta di via di classe astratta ma senza implementazioni

//funzioni sono oggetti quindi posso definire come deve essere una funzioone

//interfaccia per definire una funzione:::
interface interfaceFunction{
    (a:number,b:number):number
}

let add:interfaceFunction;

//proprietà opzionali;
// un punto interrogativo davanti alla proprietà se la proprietà è opzionale

interface NamedPerson {
    surname?:string;
    name:string;
    age?:number;
}


class PersonThatGreets implements Greetable {
    constructor(public name:string,public age:number){
    }
    greet(){
        console.log("ello my dogo")
    }
}


