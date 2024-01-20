// primitive (call by value)--> always a copy is sent
// 7 Types : String , Number , Boolean , null , undefined , Symbol ,
//              BigInt




// non-primitive (call by reference ) --> 
//  reference is sent and change is reflected in original

//  Arrays , Objects , Functions 

const heroes=["shaktiman", "naagraj","doga"]

let obj={
    name:"ashutosh" ,
    age: 21,

}

const myVariable =function(){   //function object
    console.log("HELLO WORLD");
}



// ******* is JS statically typed or dynamically typed Language  ******

// need to give dataTypes to variable at declaration ??

// let userEmail;
// const score ;
// const scoreValue=100.3
// const id=Symbol('123');
// const anotherId =Symbol('123');

// console.log(id===anotherId); --> false => it will be not be equal even if the given value is same

const bigNumber= 23475351563725234673476576n;
console.log(typeof bigNumber);
// console.log(bigNumber);