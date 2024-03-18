function tinhTienNuoc(){
    let num = +prompt("Nhap so nuoc: ");
    let sum = 0;
    while(num > 0){
        if(num > 30){
            sum += (num - 30) * 15929;
            num = 30;
        }
        else if(num > 20){
            sum += (num - 20) * 8669;
            num = 20;
        }
        else if(num > 10){
            sum += (num - 10) * 7052;
            num = 10;
        }
        else{
            sum += num * 5973;
            num = 0;
        }
    }
    document.getElementById("result").innerHTML = sum;
}