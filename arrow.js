//arrow function which returns the product of two numbers
const prod1 = (a,b) => a*b;

console.log(prod1(2,3));

//create a student object

const studnt = {
    name: "Nikhil",
    age: 28,
    greet() {
        console.log("Hi, my name is " + this.name + ". my age is " + this.age);
    }
    
};

studnt.greet()