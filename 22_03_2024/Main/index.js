let sum = 0;

let t = prompt("Nhap vao gia tri: ");
while(t !== 'q'){
    sum += parseInt(t);
    t = prompt("Nhap vao gia tri: ");
}
document.getElementById("result").innerHTML = "Result is: " + sum;