var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var add = function (num1, num2) {
    var ris = num1 + num2;
    return ris.toString();
};
button.addEventListener('click', function () { console.log(add(+input1.value, +input2.value)); });
