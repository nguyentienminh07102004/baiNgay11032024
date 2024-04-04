class user{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    checkOlder18(){
        if(this.age >= 18){
            return true;
        }
        return false;
    }
}