
var calculator= document.getElementById("calculator"),
    showButton= document.getElementById("show"),
    hideButton= document.getElementById("hide"),
    prevousOutput = document.getElementById("previous-output"), 
    currentOutput = document.getElementById("output"),
    equalButton = document.getElementById("equalButton"),
    deletButton = document.getElementById("deletButton");
    
const numberButtons = document.querySelectorAll("#numButton"),
      opration = document.querySelectorAll("#opButton");

var previousNumber='',
    currentNumber='',
    operations='';

calculator.style.display='none';

showButton.addEventListener('click', function(){
    calculator.style.display='block';
})

hideButton.addEventListener('click', function(){
    calculator.style.display='none';
})

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        
        appendNumber(button.innerText);
        uptetDisplay();
    })
})
opration.forEach(button => {
    button.addEventListener('click', function(){
        
        chooseOp(button.innerText);
        uptetDisplay();
    })
})

equalButton.addEventListener('click', function(){
    compute();
    uptetDisplay();
})

deletButton.addEventListener('click', function(){
    clear();
    uptetDisplay();
})





function appendNumber(number)
{
    if(number=='.' && currentNumber.includes('.') )return
    currentNumber=currentNumber.toString()+number.toString(); 
    
}

function uptetDisplay()
{
    currentOutput.innerText= currentNumber;
    prevousOutput.innerText= previousNumber;
}

function clear()
{
    previousNumber='';
    currentNumber='';
    operation='';
}

function chooseOp(operation)
{
    operations=operation;
    if(currentNumber=='')return
    previousNumber=currentNumber;
    currentNumber='';
}

function compute()
{
    var equalN;
    const PN = parseFloat(previousNumber);
    const CN = parseFloat(currentNumber);
    if(isNaN(PN) || isNaN(CN))return
    switch(operations){
        case '+':
            equalN=PN+CN;
            break
        case '-':
            equalN=PN-CN;
            break
        case '*':
            equalN=PN*CN;
            break
        case '÷':
            equalN=PN/CN;
            break
        default:
            return                       
    }
    currentNumber=equalN;
    previousNumber='';
    oprations=undefined;
}





