//var let const
//typeof a 
var a=20;
console.log(a);
console.log(typeof a);  //type of operator is used for type of datadtored in variable

a ="hello World";
console.log(a);
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

var b = `hello everyone hope you all are good`;
console.log(b);

//use of \n to add content in one line
var num = 4500;
console.log(`half of ${num}is half ${num/2} is`);


//var topic
var a;
var a ="100";  //a is declare
console.log(a);

var a = "500";  //a is redeclare
console.log(a);

a = "1000"; //a is reintialze
console.log(a);

//overcome this reiniliaze and redeclare in var introduce let

//let topic
let l ="80";
console.log(l);

//let l ="400"; // let l is already been declared
//console.log(l);

l ="900"; //let m l ko reintialize  variable kar sakte but redeclare nhi
console.log(l);

//loop condtions in js
var num =16;
for(var i=0;i<num;i++){
    if(i % 2==0){
        console.log("num is even"+num);
    }
    
}

//const in js
const t ="40";
console.log(t);

const t = "55"; //redeclartion is not done in const variable syntaxerror
console.log(t);

t ="88"; //reinitialze is not done in const variable
console.log("fitness freak)";





