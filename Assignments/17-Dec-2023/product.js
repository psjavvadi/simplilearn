function Product(name,price,discount){
    this.name=name;
    this.price=price;
    this.discount=discount;
    this.display = ()=>
    {
        console.log("Product Name: "+this.name);
        console.log("Product Actual Price: "+this.price);
        let dp = this.price-((this.price*this.discount)/100);
        console.log("Product discounted price: "+dp);
        console.log();

    }
}
const p1=new Product('Watch',5000,10);
const p2=new Product('LED TV',10000,20);
const p3=new Product('Oven',20000,30);
const p4=new Product('Shoes',8000,30);
p1.display();
p2.display();
p3.display();
p4.display();