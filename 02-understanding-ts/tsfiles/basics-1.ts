function add1(n1: number, n2: number, showResult: boolean,phrase:string) {
    const result = n1+n2
    if (showResult) {
    console.log(phrase +result);
  } else {
    return n1 + n2;
  }
}

let number1:number;
number1=5;
const number2 = 2.8;
const printresult = true;
const resultP = 'the reesult is: '
add1(number1, number2, printresult,resultP);
;
