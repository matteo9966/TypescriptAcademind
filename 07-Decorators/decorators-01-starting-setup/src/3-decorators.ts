/* questa funzione restituisce una classe che estende il constructor che riceve come parametro
del decorator che restituisce.
SOSTANZIALMENTE: questa funzione è una decorator factory che restituisce che restituisce una classe che 
                 modifica il costruttore della classe originale 
*/
// function WithTemplate(template: string, hookId: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalconstructor: T
//   ) {
//     // _ per dire che non mi interessa il costruttore

//     //questo WithTemplate è un decorator che restituisc un nuovo constructor che
//     //prende il posto del constructor della classe
//     return class extends originalconstructor {
//       //questo decorator restituisce qualcosa solo se viene instanziata la classe
//       constructor(..._: any[]) {
//         super();
//         // const person = new originalconstructor();
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           const par = document.querySelector("p")!;
//           par.innerHTML = this.name;
//         }
//       }
//     };
//   };
// }

// @WithTemplate("<h1></h1>", "app")
// class Person2 {
//   name = "matteo";
// }

//solo decorator che leghiamo a classi getter e setter e metodi hanno un return.

function WithTemplate2(template: string, hookId: string) {
  console.log("Template factory");
  //{new} oggetto che puo essere chiamato
  //{new(...args)} posso passare quanti elementi voglio al costruttore
  //{new(...args)}:{} restituisce un oggetto
  //{new(...args)}:{name:string} 
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalconstructor: T
  ) {
    return class extends originalconstructor {
      // constructor(...args:any[]) { se non uso args posso rimpiazzarlo con _
      //per dire a typescript che so che c'è ma che non lo userò
      constructor(..._: any[]) {
        super();
        console.log("rendering Template");
        const domEl = document.getElementById(hookId);
        if (domEl) {
          domEl.innerHTML = template;
          domEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate2("<h1>TextFile</h1>", "app")
class Guy {
  name = "guy fieri";
}

const guy1 = new Guy();





//class method e accessors decorators sono gli unici decorator che restituiscono qualcosa
// function DecoratorThatAddsDescriptor(target:any,name:string,descriptor:PropertyDescriptor):PropertyDescriptor{
//   console.log('ACCESSOR DECORATOR');
//   console.log(target)
//   console.log(name)
//   console.log(descriptor)
//   return {}
// }
 
//Autobind sostituirà il descriptor del metodo togliendoli value e mettendo un getter al posto di value
function Autobind(
  _: any,  //target prototipo della classe 
  _2: string, //methodname
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    //invece di usare il value:, sto usando un get() ,
    //(vedi accessor descriptor sul perche)
    get() {  // questo get restituisce una funzione
      //get è triggerato dal oggetto a cui appartiene
      //===>>>> per questo il this al interno del get si riferisce al oggetto
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;  // questo descriptor rimpiazzerà quello vecchio 
}

class Printer {
  message = "[message from printer]";
  
  @Autobind
  showMessage() {
    console.log(this);
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);
