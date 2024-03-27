let numbers = [
    [12, 4, 5, 9],
    [2, 5, 3, 2],
    [1, 2, 1, 8]
];
let sum = 0;
let content = "<table>";
for(let Values of numbers){
    content += "<tr>";
    for(let value of Values){
        content += "<td>" + value + "</td>";
    }
    content += "</tr>";
}
document.getElementById("table").innerHTML = content;
content += "</table>";
for(let values of numbers){
    for(let value of values){
        sum += (value % 2 === 0) ? value : 0;
    }
}
document.getElementById("res").innerHTML = "Tong cac so chan trong mang la: " + sum;