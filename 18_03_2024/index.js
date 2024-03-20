function check(){
    let month = +document.getElementById("month").value;
    let mess = "Thang " + month + " co ";
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            mess += "31 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            mess += "30 ngay";
            break;
        case 2:
            mess += "28 ngay";
            break;
        default:
            mess = "Nhap sai";
    }
    document.getElementById("result").innerHTML = mess;
}