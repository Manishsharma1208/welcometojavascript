//Objects:- objects consists of propertire $ methods
//key : value

let obj = {};
console.log(obj); //blank object

let person ={
    //key : value
    Name : "Manish",
    Surname : "Sharma",
    Age : 22,
    Height : 169,
    Gender : "Male",
};
console.log(person);
console.log(person.Height); //Dot notation
console.log(person["Age"]); //Bracket Notation

//nesting of Objects
let captainAmerica ={
    FirstName : "steve",
    LastName : "Rogers",
    Friends : ["Busky","Tony Stark","Rahul","Pankaj"],
    Age : 102,
    isAvenger : true,
    Address :{
        State : "Manhattan",
        City : "New York",
        Country : "USA",

    },
    SayHii : function(){
        console.log(`hello my name is ${this.FirstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.Friends[1]);
captainAmerica.SayHii();

//for loop  used in object
for(let key in captainAmerica){
    //key
console.log(key);
  //value k liye
  //variable k anadar ko binded value wo chaiye
  console.log(captainAmerica[key]);
  //bracket notation usage
};

//Dot notation used in javascript
let car ={
    Name :"ferrari",
    Model : 2022,
    startEngine :function(){
       console.log(`start the engine of the car ${this.Name}`); 
    }
}
car.startEngine(); //function Calling
console.log(car.Name);

//Bracket Notation
let bike ={
    0 :"pulser",
    1  :"honda",
    2 : "bullet",
};
console.log(bike[1]); //bracket Notation used

for(let ghoda in bike){
    console.log(ghoda); //bike ki property or called Key
    console.log(bike[ghoda]); //bike ki value or called  value
}

//this used in object
let fire ={
    name : "Maruti",
    model : 2010,
    startEngine :function(){
        console.log(`start the engine on the car ${this.model}`);

    }
};
car.startEngine();

