function add(n1:number,n2:number){
    return n1+n2
}

function addAndHandle(n1:number,n2:number,callback : (a:number)=>void ){
  const result = n1+n2;
  callback(result)
}

addAndHandle(10,20,(a:number)=>{console.log(a)})

function printResult(num:number): void { // per funzioni che non restituiscono nulla
   console.log("risultato: ",num);
}

// in typescript, se definisco un puntatore a una funzione posso definire cosa mi
// aspetto che sia quella funzione

let combineValues: (a:number,b:number)=>number  // una funzione che prende due numeri e restituisce un numero

combineValues=add;

console.log(combineValues(3,4))

