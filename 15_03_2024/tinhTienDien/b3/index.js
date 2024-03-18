function tinhTienDien() {
    let start = +document.getElementById("start").value;
    let end = +document.getElementById("End").value;
    let num = end - start;
    let Sum = 0;
    while (num > 0) {
        if (num > 400) {
            Sum += (num - 400) * 3151;
            num = 400;
        } else if (num > 300) {
            Sum += (num - 300) * 3050;
            num = 300;
        } else if (num > 200) {
            Sum += (num - 200) * 2729;
            num = 200;
        } else if (num > 100) {
            Sum += (num - 100) * 2167;
            num = 100;
        } else if (num > 50) {
            Sum += (num - 50) * 1866;
            num = 50;
        } else {
            Sum += num * 1806;
            num = 0;
        }
    }
    console.log(Sum);
    document.getElementById("result").innerHTML = Sum;
}