
     let num = +prompt("Nhap so tien dien: ");
     let sum = 0;
     while (num > 0) {
         if (num > 400) {
             sum += (num - 400) * 3151;
             num = 400;
         } else if (num > 300) {
             sum += (num - 300) * 3050;
             num = 300;
         } else if (num > 200) {
             sum += (num - 200) * 2729;
             num = 200;
         } else if (num > 100) {
             sum += (num - 100) * 2167;
             num = 100;
         } else if (num > 50) {
             sum += (num - 50) * 1866;
             num = 50;
         } else {
             sum += num * 1806;
             num = 0;
         }
     }
     document.getElementById("result").innerHTML = sum;