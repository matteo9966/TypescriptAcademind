interface Arr {
    length:number ;
}

function genericsFunction<T extends Arr>(a:T):T{
   
    console.log(a.length)
    return a.length
}

interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<T extends Lengthwise>(arg: T): T | number {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    const b:number = arg.length;
     return b
  }


interface Lengthy {
    length: number;
  }
  
  
  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
      descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
  }