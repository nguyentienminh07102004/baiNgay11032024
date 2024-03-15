let year = parseInt(prompt("Enter a age: "));
let mess = "";
if(2024 - year >= 18){
    mess = "Old enough";
}
else{
    mess = "Too young";
}
document.getElementById("result").innerHTML = mess;