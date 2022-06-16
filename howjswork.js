//Memory Creation phase and code execution phase top to bottom Read
//its work on global execution Phase
var num =5;
function cube(num){ //local Exection phase make by function and then reurn value to Global. 
    var res = num*num*num;
    return res;
}
var ans1 = cube(num);
var ans2 = cube(10);
var ans3 = cube();

console.log(ans1);//num value is 5
console.log(ans2);//cube 10 is given
console.log(ans3);//cube() is no value is given then in output is NAN.
//whole function print
console.log("" +cube);