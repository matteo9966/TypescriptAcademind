const button = document.querySelector('button');
const input1 = document.getElementById('num1') ! as HTMLInputElement;
const input2 = document.getElementById('num2') ! as HTMLInputElement;


const add = (num1:number,num2:number)=>{
    const ris= num1 + num2;
    
    return ris.toString();
}

button.addEventListener('click',()=>{console.log(add(+input1.value,+input2.value))});
