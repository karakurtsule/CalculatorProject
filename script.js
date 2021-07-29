const input = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

input.value = '0';
let firstValue = null;
let operator = null;
let secondValue = false;

function inputNumber(num){
    if(secondValue){
        input.value = num;
        secondValue = false;
    }
    else{
    input.value = input.value == '0'?num: input.value + num;
    }
}

function inputDecimal(){
    if(!input.value.includes('.')){
        input.value += '.';
    }
    
}

function clear(){
    input.value = '0';
}

function handleOperator(nextOperator){
    const value = parseFloat(input.value);
    if(firstValue == null){
        firstValue = value;
    }
    else if(operator){
        const result = calculate(firstValue,value,operator);
        input.value = String(result);
        firstValue = result;
    }
    secondValue = true;
    operator = nextOperator;
}


keys.addEventListener('click',function(e){
    const element = e.target;
    if(!element.matches("button")) return;
    if(element.classList.contains('operator')){
        console.log('operator:',element.value);
        handleOperator(element.value);
        return;
    }
    if(element.classList.contains('decimal')){
        console.log('decimal:', element.value);
        inputDecimal(element.value);
        return;
    }
    if(element.classList.contains('clear')){
        console.log('clear:', element.value);
        clear();
        return;
    }
    //else : number ise
    inputNumber(element.value);
    //console.log('number:', element.value);
    
    e.preventDefault();
})

