let a = [];
function add(){
    a.push(document.getElementById("input").value);
}
function display(){
    let result = "";
    a.forEach(function(value, index){
        document.write("Element " + index + " = " + value);
    });
}