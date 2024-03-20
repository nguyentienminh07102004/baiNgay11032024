let cnt = 1;
while(300000 * Math.pow(1.05, cnt) <= 4000000){
    cnt++;
}
document.write(cnt);