// console.log("2">1);
// ==  --> it convertes the values to the same type before comparing them 
// Type coersion ??
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true => because comparisions convert null to a number 
                        //  thats why 0 > 0 => false , 0>=0 => true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
// it gives false because it is converted into NaN 


//  ===   --> it does not convert anything , it is a strict comparision 
// it compares along with the data type 

console.log("2"===2);