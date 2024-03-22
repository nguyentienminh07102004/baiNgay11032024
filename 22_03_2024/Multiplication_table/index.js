const table = document.querySelector("table");

for(let i = 2; i < 10; i++){
    const tr = document.createElement('tr');
    for(let j = 1; j < 10; j++){
        const td = document.createElement("td");
        td.innerText = i + " x " + j + " = " + `${i * j}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}