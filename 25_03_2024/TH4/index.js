let x = ["apple", "banana"];
let y = ["táo", "chuối"];
function search(){
    let key = document.getElementById("key").value;
    for(let i = 0; i < x.length; i++){
        if(x[i] === key){
            document.getElementById("res").innerHTML = y[i];
        }
    }
}