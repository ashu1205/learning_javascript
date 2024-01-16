let score =null

// console.log(typeof(score));

let valueInNumber=Number(score)

// console.log(typeof(valueInNumber));

// console.log(valueInNumber);

//"33" => 33
//"33abc" =>NaN  , type - number
//undefined , "ashu" => NaN , type - number
//true=> 1 ; false=> 0 

// except for null => 0 , type - number

// let loggedIn=1; //=> true
// let loggedIn=""; => false 
// let loggedIn="ashu"; =>true 
// let loggedIn=null; => false
// let loggedIn=undefined;  => false
// let loggedIn=NaN; => false 
let loggedIn=[];


let booleanLoggedIn= Boolean(loggedIn);

// console.log(booleanLoggedIn);

// console.log(""==false);  => true ---> value of "" is false
// console.log([]=="");  ---> look for this ???

let num= 45

let stringNum=String(num)

// console.log(stringNum);  converted into "45" 
// console.log(typeof(stringNum));  string


// ******************** Operations **************
let value=3
let negValue=-value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // 2 to power 3
// console.log(2/3);
// console.log(2%2);

let str1="ashutosh "
let str2="chahar"

let str3=str1+str2

// console.log(str3);

// ***===>>> different
// console.log("1"+2);
// console.log(typeof("1"+2));
// console.log(1+"2"); 
// console.log(typeof(1+"2"));  // both 12 and "string"

// console.log(1 + "2" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + "2");  same for all==> 122

// console.log(1 + 2 + "2");  ==> 32 , read doc

//*** boolean  */

// console.log(true);

// console.log(+true); => 1 (converted)

// console.log(+"");  => 0


// ------ increment , decrement -----
// pre post --> precedence

let counter=99;

// console.log(--counter); ==> 98

counter=100
// console.log(counter++); ==>100

