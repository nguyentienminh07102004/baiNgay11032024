let students = [
    ["Tran Tuan Anh", 20, "HUST"],
    ["Pham Van Hieu", 21, "EAUT"]
];
let content = "<table>";
for(let Values of students){
    content += "<tr>";
    for(let value of Values){
        content += "<td>" + value + "</td>";
    }
    content += "</tr>";
}
content += "</table>";
document.getElementById("Res").innerHTML = content;