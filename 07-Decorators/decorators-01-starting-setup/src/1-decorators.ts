//Decorators
//questo è un factory decorator
function Logger(logString: string) {
  //Logger è un decorator
  return function (constructor: Function) {
    console.log(logString);
    console.log("logging...");
    console.log(constructor);
  };
}

function WithTemplate1(template: string, hookId: string) {
  return function (constructor: any) {
    // _ per dire che non mi interessa il costruttore
    const person = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      const par = document.querySelector("p")!;
      par.innerHTML = person.name;
    }
  };
}

//@puntatore a deocratore
//@nomefunzione() esegue la funzione che restituisce una funzione
//il decoratore viene eseguito quando la classe viene creata non quando viene istanziata

// @Logger("Logging-Person") //passo valori che puo usare il decorator
@Logger("Logging-Person")
@WithTemplate1("<h1>my person object</h1><p></p>", "app")
class Person {
  name = "max";
  constructor() {
    console.log("creato un oggetto");
  }
}

const person = new Person();

//Esempio2

// function Log(target:any,propertyName:string){
//     console.log('property decorator');
//     console.log(target);
//     console.log(propertyName);
// }



// class Product {
//   @Log  
//   title: string;
//   _price: number;
//   set price(val: number) {
//     if (val > 0) {
//       this.price = val;
//     } else {
//       throw new Error("price must be > 0");
//     }
//   }

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }
