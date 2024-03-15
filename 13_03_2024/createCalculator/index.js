function add(){
    let a = parseInt(document.getElementById("firstNumber").value);
    let b = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = a + b;
}
function diff(){
    let a = parseInt(document.getElementById("firstNumber").value);
    let b = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = a - b;
}
function mul(){
    let a = parseInt(document.getElementById("firstNumber").value);
    let b = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = a * b;
}
function div(){
    let a = parseInt(document.getElementById("firstNumber").value);
    let b = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = a / b;
}