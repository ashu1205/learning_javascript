const name = "ashutosh chahar" // it also invokes object in the background
const repoCount = 5

// always use string interpolation using back tick insted of  +" "+

console.log(`hello i am ${name.toUpperCase()} and my repocount is ${repoCount}`);

// using object to declare 
const str1 = new String(" hello world ")
//

console.log(typeof name); // string type

console.log(typeof str1); // object type

//*************  String methods  *****************//

console.log(str1.__proto__); // {}

console.log(str1.length);
console.log(str1[6]);
console.log(str1.charAt(2));

console.log(str1.toLowerCase()); // doesn't change the original string because its stored in stack memory

console.log(str1.trim()) // => trims the extra whitespaces from the starting and end of string

console.log(str1.indexOf('w'));

const newStr=str1.substring(0,6) //doesn't includes the last index
console.log(newStr);

const anotherStr=str1.slice(-5,-3) // will start from end 1-based indexing

console.log(anotherStr);

const url="ashutoshchahar%201250.com"

console.log(url.replace('%20','+'));

console.log(url.includes('chahar'));

const str2="ashutosh-chahar-1250-gmail.com"
// console.log(str2.split("-",2));  (splitter, limit)