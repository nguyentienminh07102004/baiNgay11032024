let display = document.getElementById("display");
function Click(value){
    if(display.value != null)
        display.value += value;
    else
        display.value = value;
    display.innerHTML = display.value;
}
function  Result(){
    display.innerHTML = eval(display.value);
    display.value = "";
}
function Delete(){
    display.innerHTML = "0";
    display.value = "";
}