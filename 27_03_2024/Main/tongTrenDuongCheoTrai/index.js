let numbers = [
    [12, 4, 5, 9],
    [2, 5, 3, 2],
    [1, 2, 1, 8],
    [3, 5, 6, 8]
];
let sum = 0;
let content = '<table>';
for(let Values of numbers){
    content += '<tr>';
    for(let value of Values){
        content += "<td>" + value + "</td>";
    }
    content += "</tr>";
}
document.getElementById("table").innerHTML = content;
content += "</table>";
for(let values in numbers){
    for(value in numbers[values]){
        if(values === value){
            sum += numbers[values][value];
        }
    }
}
document.getElementById("res").innerHTML = "Tong cac so chan trong mang la: " + sum;