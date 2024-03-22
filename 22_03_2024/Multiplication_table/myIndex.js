let content = "";
content = "<table>";
for(let i = 1; i < 10; i++){
    content += "<tr>"
    for(let j = 2; j < 10; j++){
        content += "<td>";
        content += `${i} x ${j} = ${i * j}`;
        content += "</td>";
    }
    content += "</tr>";
}
content += "</table>"

document.body.innerHTML = content;