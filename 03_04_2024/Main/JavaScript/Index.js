class Book{
    name;
    author;
    price;
    status;
    image;
    constructor(name, author, price, status, image){
        this.name = name;
        this.author = author;
        this.price = price;
        this.status = status;
        this.image = image;
    }
    setName(name){
        this.name = name;
    }
    setAuthor(author){
        this.author = author;
    }
}