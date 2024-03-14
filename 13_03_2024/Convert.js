function change(s){
    if(s == "USD") return 23000;
    else return 1;
}
function ConvertMoney(){
    let money = document.getElementById("amount").value;
    let fromCurr = document.getElementById("From").value;
    console.log(fromCurr);
    let toCurr = document.getElementById("to").value;
    let res = money / change(toCurr) * change(fromCurr) + " " + toCurr;
    document.getElementById("result").innerHTML = res;
}