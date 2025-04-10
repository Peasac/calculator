const buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".delete");
const clearAll = document.querySelector(".clear");
const oper = document.querySelectorAll(".oper");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".equal");
let firstOperand = "";
let secondOperand = "";
let operator = "";
let answer = "";

function add(a,b) {
    return a +b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(a,b,c) {
    if (b=="+") return add(a,c);
    else if (b=="-") return subtract(a,c);
    else if (b=="*") return multiply(a,c);
    else return divide(a,c);
}

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        if(answer){
            screen.innerHTML = "";
            
            
        }
        if(screen.innerHTML.length > 5) {
            screen.innerHTML+="";
        }
        else {
            if(screen.innerHTML.includes(".")) {

                if(button.value==".") {

                    screen.innerHTML +=""
                }
                else {screen.innerHTML += button.value;
                    firstOperand += button.value;
                    console.log(firstOperand);}
            }
            
        else {screen.innerHTML += button.value;
        firstOperand += button.value;
        //console.log(firstOperand);
        }}
        //console.log("1", firstOperand);
        //console.log("2", secondOperand);
    }
)
})
oper.forEach((op)=> {
    op.addEventListener("click", ()=> {
        if(operator) {
            operator = op.value;
            secondOperand = operate(secondOperand,operator,parseFloat(firstOperand));
            firstOperand = "";
            screen.innerHTML = "";
            operator = op.value;

        }
        else {
        secondOperand = parseFloat(firstOperand);
        firstOperand = "";
        screen.innerHTML = "";
        operator = op.value;}
        //console.log("value of first operand", firstOperand, "second", secondOperand)
    })
})

equal.addEventListener("click", ()=> {
    if(secondOperand!="" && firstOperand!="")
    {
        
        answer = operate(secondOperand,operator,parseFloat(firstOperand));
        if(answer%1!=0){
            screen.innerHTML = answer.toFixed(4);
        }
        else screen.innerHTML = answer;
        secondOperand = "";
        
        firstOperand = parseFloat(answer);
        //console.log(typeof(firstOperand));
        //console.log(secondOperand);
        //console.log("answer", answer)
        
        
    }
})

clearAll.addEventListener("click", ()=> {
    screen.innerHTML = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    answer = "";
})

clear.addEventListener("click", ()=> {
    
    
    if(typeof(firstOperand) == 'string'){
    screen.innerHTML = screen.innerHTML.slice(0,-1);
    firstOperand = firstOperand.slice(0,-1);}

})
let Keys=["1","2","3","4","5","6","7","8","9","0","."];
let operators = ["+", "-", "*", "/"];
document.addEventListener("keydown", (e)=> {
    
    if(Keys.includes(e.key) ){
        if(answer){
        screen.innerHTML = "";
        }
        if(screen.innerHTML.length> 5) {
            screen.innerHTML+="";
        }
        else {
        if(screen.innerHTML.includes(".")) {
            if(e.key==".") {
                screen.innerHTML +="";
            }
            else {screen.innerHTML += e.key;
                firstOperand += e.key;
                }
        }
        
        
    else {screen.innerHTML += e.key;
    firstOperand += e.key;
    console.log(firstOperand);}}}
    if(operators.includes(e.key)){
        if(operator) {
            operator = e.key;
            secondOperand = operate(secondOperand,operator,parseFloat(firstOperand));
            firstOperand = "";
            screen.innerHTML = "";
            operator = op.value;

        }
        else {
        secondOperand = parseFloat(firstOperand);
        firstOperand = "";
        screen.innerHTML = "";
        operator = e.key;}
    }
    if(e.key == "Enter"|| e.key == "="){
        if(secondOperand!="" && firstOperand!="")
            {
                
                answer = operate(secondOperand,operator,parseFloat(firstOperand));
                if(answer%1!=0){
                    screen.innerHTML = answer.toFixed(4);
                }
                else screen.innerHTML = answer;
                secondOperand = "";
                
                firstOperand = parseFloat(answer);
                //console.log(typeof(firstOperand));
                //console.log(secondOperand);
                //console.log("answer", answer)
                
                
            }
    }
    if(e.key == "Backspace"){
        if(typeof(firstOperand) == 'string'){
            screen.innerHTML = screen.innerHTML.slice(0,-1);
            firstOperand = firstOperand.slice(0,-1);}
    }
    if(e.key == "Delete"){
    screen.innerHTML = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    answer = "";
    }
}
    
)
