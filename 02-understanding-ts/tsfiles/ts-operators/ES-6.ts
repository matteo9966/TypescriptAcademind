const addnumbers = (...numbers:number[]) =>{
  let result = 0;
  result=numbers.reduce((res,el)=>{
      return res+el
  },0)
  return result
}

let sum=addnumbers(1,2,3,4,5,6,7,8,9,10);
console.log(sum);

