//Array :- Array is an collection of elements.
let cars =["bmw","audi","Tata","Gwagon",1,2,3,4,true];
console.log(cars);

//Accesing the element of an array
console.log(cars[3]);
console.log(cars[6]);

//Replacing Element in Array
cars[2]="Mahendira";
console.log(cars);

//Adding element in Array
cars[9]="MG";
console.log(cars);

//Methods of an Array
//pop method:-
cars.pop();
console.log("after poping the element\n" +cars);

//push Method:-
cars.push("hero");
console.log("after pushing the element \n"  +cars);

//unshift Method:-
cars.unshift("jaguar");
console.log("after unshift the element\n" +cars);

//shift Method:-
cars.shift();
console.log("after shift the element\n" +cars);

//finding length of an Array
console.log(cars.length);

//2d Array
let array2d =[
    [1,"bmw",3,4],
    [5,6,7,null],
    [9,'10',11,12],
]; //array of arrays
console.log(array2d);

//Table of 2d array
let res = array2d [1]; //[ 5, 6, 7, 8 ]
console.log(res);
console.table(array2d); //print the 2d array in the form of table
console.log(array2d [1][2]);

//2d array m element kese change karte hain
array2d[0][1] = "Thar";
console.table(array2d);
