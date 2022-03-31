function MakeCalculator() {
    this.clear = function(){
        display.innerText = '';
    }
}

const calculator = new MakeCalculator()

document.querySelector('#clear').addEventListener('click', calculator.clear)


// // Dont know what to call this now
// let display = document.getElementById('display')

// // Event Listeners - Numbers
// document.querySelector('#zero').addEventListener('click', zero)
// document.querySelector('#one').addEventListener('click', one)
// document.querySelector('#two').addEventListener('click', two)
// document.querySelector('#three').addEventListener('click', three)
// document.querySelector('#four').addEventListener('click', four)
// document.querySelector('#five').addEventListener('click', five)
// document.querySelector('#six').addEventListener('click', six)
// document.querySelector('#seven').addEventListener('click', seven)
// document.querySelector('#eight').addEventListener('click', eight)
// document.querySelector('#nine').addEventListener('click', nine)

// // Event Listenvers - Operators
// document.querySelector('#clear').addEventListener('click', clear)
// // document.querySelector('#negate').addEventListener('click', negate)
// // document.querySelector('#percent').addEventListener('click', percent)
// // document.querySelector('#divide').addEventListener('click', divide)
// // document.querySelector('#multiply').addEventListener('click', multiply)
// // document.querySelector('#minus').addEventListener('click', minus)
// // document.querySelector('#plus').addEventListener('click', plus)
// // document.querySelector('#decimal').addEventListener('click', decimal)
// // document.querySelector('#equals').addEventListener('click', equals)

// // Number Functions
// function zero(){
//     display.innerText += 0;
// }
// function one(){
//     display.innerText += 1;
// }
// function two(){
//     display.innerText += 2;
// }
// function three(){
//     display.innerText += 3;
// }
// function four(){
//     display.innerText += 4;
// }
// function five(){
//     display.innerText += 5;
// }
// function six(){
//     display.innerText += 6;
// }
// function seven(){
//     display.innerText += 7;
// }
// function eight(){
//     display.innerText += 8;
// }
// function nine(){
//     display.innerText += 9;
// }

// // Operators Functions
// function clear(){
//     display.innerText = '';
// }
// function negate(){
//     display.innerText = '-';
// }
// function percent(){
//     display.innerText = '';
// }
// function percent(){
//     display.innerText = ''
// }
// function divide(){
//     display.innerText = '/'
// }
// function multiply(){
//     display.innerText = '*'
// }
// function minus(){
//     display.innerText = '-'
// }
// function plus(){
//     display.innerText = '+'
// }
// function decimal(){
//     display.innerText = '.'
// }
// function equals(){
//     display.innerText = '='
// }

// // Calculations
// let prevValue;
// let currentValue;
// let operator;