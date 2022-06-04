//function in javascript
//var is a function scoped its a block scope and an global scoped
var num =10;
for(var i=0;i<num;i++){
    if(i%2 ==0){
        console.log(i);
       // var num = 1000;
    }
}
//console.log(num);

//let is a block scoped only
let j=20;
for(let j=0;j<num;j++){
    let j = 50;
   // let m= 1000;;
    if(j%2 ==0){
        console.log("inner part"+ j);
    }
}
console.log("outer part"+ j);
//console.log(m); //its out of block its gives m is not defined

//function expression:- sayhii is an expreesion of function
let sayhii = function(){
  console.log("hello Everyone welcome in javascipt");
}
console.log("line 59\n"+ sayhii);
sayhii();

//functioin can be passed ad parameter/argument
//add,mul,div,sub:-
function calculator(str,a,b){
  if(str == 'add'){
    return function add(){
      console.log(a + b);
    }
  }
}
let returnedfunc = calculator('add',2,5);
console.log("returned function\n" + returnedfunc);
//returnedfunc();

//multiply two parameter:-
function calculator(str,a,b){
  if(str == 'multiply'){
    return function multiply(){
      console.log(a*b);
    }
  }
}
let returnedfun = calculator('multiply',5,7);
console.log("returnedfun\n" + returnedfun);
returnedfun();

//3. IIFE :- Immediately invoke function Expression
let addlife = (function (a,b){
  console.log(a+b);
})(20,37);