//hoisting = Hoisting is an process whereby the declaration of function ,variable to the top of their scope
console.log(a);
greet();
//hello(); is case me hello undefined orclear is not a function dega kyuki ye varaible k andar funcytion h isliye 
var a=10;
//function
function greet(){
    console.log("hello viewers");
}
//function Expression
var hello = function(){
    console.log("you guys are Rock");
}
hello(); //is case m function call hogya h or ye function k declare hone k baad call hua isilye