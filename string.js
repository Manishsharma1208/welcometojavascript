// String :- string is an sequence of characters.
var str = "Hello pepcoders";
console.log(str);

console.log(str[4]);

console.log(str.length);

//String method
// 1.Extraction Method:-
  //slice Method:- Slice method work with (start,End);Start is an inclusive and End is Exclusive.
  let slicestr = str.slice(2,8);
  console.log(slicestr); 
  console.log(str); //original source of information is not changed

  var slicedstr = str.slice(6);
  console.log(slicedstr);

  var slicedstr = str.slice(2,-4);
  console.log(slicedstr);

  //2. Substring Mdethod:- Substring Method(start,length); Start index se shuru hoga aur aage ke 
  //kitne caharacter capture karne h

  let ans = str.substr(2,6);
  console.log(ans);

  //Replacing str value;
  str = "yolo";
  console.log(str);
  
  //lowercase str value;
  console.log(str.toLowerCase());
  
  //uppercase str value;
  console.log(str.toUpperCase());
  //original data of str is not changed;
  console.log(str);

  //Concatenation method:- 2 combine string and make them one string
  let firststr = "believe in yourself ";
  let secondstr = "not Others";
  console.log(firststr + secondstr);

  //concat Method:-first and second str + new str;
  let concatstr = firststr.concat(secondstr, " and me");
  console.log(concatstr);

  //Trim method :- Remove all the whitespace of starting and  an ending of a string.
  let trimstr = "           hello            how are you           ";
  console.log(trimstr);
  console.log(trimstr.length);

  //trim method using:-
  console.log(trimstr.trim());
  console.log(trimstr.trim().length);






