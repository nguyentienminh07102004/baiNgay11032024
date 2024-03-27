let n = +prompt("Nhap vao so luong phan tu mang: ");
let a = [];
for(let i = 0; i < n; i++){
    a.push(+prompt("Nhap vao gia tri thu " + (i + 1)));
}
let first = 0;
let end = a.length - 1;
while(first <= end){
    let i = a[first];
    a[first] = a[end];
    a[end] = i;
    first++;
    end--;
}
for(let value of a){
    document.write(value + " ");
}
