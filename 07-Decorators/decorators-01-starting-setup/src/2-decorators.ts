
//in base a dove si trova il decoratore accede a proprietà diverse 
//property decorator
function Log(target:any,propertyName:string){
    console.log('property decorator');
    console.log(target);
    console.log(propertyName);
}
//getter and setter decorator
function Log2(target:any,name:string,descriptor:PropertyDescriptor){
   console.log('ACCESSOR DECORATOR');
   console.log(target)
   console.log(name)
   console.log(descriptor) 
}
//method decorator
function Log3(target:any,name:string,descriptor:PropertyDescriptor){
    console.log('METHOD DECORATOR');
    console.log(target)
    console.log(name)
    console.log(descriptor) 

}

function Log4(target:any,name:string,position:number){
    console.log('PARAMETER DECORATOR');
    console.log(target)
    console.log(name)
    console.log(position) 
}

class Product {
    
    
    @Log  
    title: string;
    _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this.price = val;
      } else {
        throw new Error("price must be > 0");
      }
    }

    
  
    constructor(title: string, price: number) {
      this.title = title;
      this._price = price;
    }
   @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }
  

  // in che ordine vengono eseguiti  ?
  /* i decoratori vengono eseguiti quando viene definita la classe non quando viene istanziata 
     servono per fare un setup di una classe prima che vengono eseguiti. eseguire codice e altre funzioni

  */


     //abbiamo
     //class decorators
     //method decorators
     //parameter decorator
     //property decorator
     //accessors decorators

     //class decorators possono restituire un nuovo constructor o una nuova class . vedi 3-decorators
     
