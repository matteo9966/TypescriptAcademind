type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin | Employee; //deve esserre tutto quello che hanno 

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

function promuovi(emp:ElevatedEmployee){
  if('privileges' in emp){

    emp.privileges.push('tech');
  }
  if('startDate' in emp){
    emp.startDate=new Date();
  }
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;



class Truck {
  drive () {
    console.log("drive the truck")
  }
  loadCargo () {

  }
}



//usare un parametro comune per fare una discriminazione nel caso di un union:

interface Animal {
  type:string
}

interface Dog extends Animal {
  type:'dogo';
  color:string;
  happy:boolean
}

interface Cat extends Animal {
  type:'catto';
  eyesColor:string;
  happy:boolean
}

//le interfacce non esistono a runtime

type Pet = Dog | Cat;

function petApet(pet:Pet){
    switch (pet.type){
      case 'catto':
    }
}


