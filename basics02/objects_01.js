//singleton --> find()
// Object.create

// object literals

const mySym=Symbol("heySym");
const user={
    name:"ashutosh",
    // "name":"ashutosh chahar",--> system processes it in this way
    // keys are taken as String by default
    "full name":"Ashutosh Chahar",
    // if duplicate keys are there, last one is returned on accessing
    age:21,
    // [mySym]:[mySym], --> o/p - [ Symbol(heySym) ]
    [mySym]:"using symbol",

    location:"agra",
    isloggedIn:true,
    lastLoginDays:['monday','tuesday']
}


// Accessing object properties
// 1))
// console.log(user.isloggedIn);
// 2))
// console.log(user["name"]);

// console.log(user.full name); -> only way to access is 
// console.log(user["full name"]);

/////
console.log(user[mySym]);

// console.log(mySym.description);-- to access its desc
// we can create two symbol with same description ,there would be no conflict as they are unique
const val1= Symbol("ashu")
const val2= Symbol("ashu")
console.log(val1==val2); // gives false because both are unique

// [Symbol(heySym)]: 'using symbol'
// this is the only way to access "Symbol" kind of value

// **override values of keys
user.location="sewla jat , agra"
// console.log(user);

// ****freeze object --> so that no one can change the values of its keys
// Object.freeze(user);
user.name="change"
// console.log(user.name);

////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// adding function to user
user.greet=function(){
    console.log("hello bro");
    return "ashutosh"
}
user.greet1=function(){
    console.log(`hello bro , i am ${this.name}`);
}
// "this" doesnt work in arrow function ()=>
// console.log(user.greet); //-> gives reference of function
// [Function (anonymous)]  
// console.log(user.greet());
//--> will give undefined if you are not returning anything

console.log(user.greet());

