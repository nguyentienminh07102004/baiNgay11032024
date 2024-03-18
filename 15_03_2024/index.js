let year = parseInt(prompt("Enter a age: "));
let mess = "";
if((new Date()).getFullYear() - year >= 18){
    mess = "Old enough";
}
else{
    mess = "Too young";
}
document.getElementById("result").innerHTML = mess;