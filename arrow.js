//arrow function which returns the product of two numbers
//const prod1 = (a,b) => a*b;

//console.log(prod1(2,3));

//create a student object

const studnt = {
    name: "Nikhil",
    age: 28,
    greet() {
        console.log("Hi, my name is " + this.name + ". my age is " + this.age);
    }
    
};

//SPREAD OPERATOR
//const copyStudnt = {...studnt};
//console.log(copyStudnt);

//const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
//const arr1 = [...arr];
//console.log(arr1);

//REST OPERATOR
//const toArray = (...args) => {
 //   return args;
//};

//console.log(toArray(1, 2, 3, 4));

//DESTRUCTOR
const printName = ({name, age}) => {
    console.log(name, age);
}

//printName(studnt);

const { name, age} = studnt;
console.log(name, age); 