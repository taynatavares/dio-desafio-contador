let currentNumber = 0;
const Contador = document.getElementById('currentNumber');


function increment() {
    currentNumber++;
    Contador.innerHTML = currentNumber;
}

function decrement () {
    currentNumber--;
    Contador.innerHTML = currentNumber;
}