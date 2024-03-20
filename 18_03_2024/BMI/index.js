function check() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let BMI = weight / (Math.pow(height, 2));
    let result = "";
    console.log(BMI);
    if(BMI < 18.5){
        result = "Underweigth";
    }else if(BMI < 25){
        result = "Normal";
    }else if(BMI < 30){
        result = "Overweigth";
    }else{
        result = "Obese";
    }
    document.getElementById("result").innerHTML = result;
}