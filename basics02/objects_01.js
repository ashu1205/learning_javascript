//singleton --> find()

// object literals

const mySym=Symbol("heySym");
const user={
    name:"ashutosh",
    // "name":"ashutosh chahar",
    // if duplicate keys are there, last one is returned on accessing
    age:21,
    [mySym]:"using symbol",
    location:"agra",
    isloggedIn:true,
    lastLoginDays:['monday','tuesday']
}
// keys are taken as String by default

// Accessing object properties
// 1))
// console.log(user.isloggedIn);
// 2))
// console.log(user['name']);

/////
// console.log(user[mySym]);
// [Symbol(heySym)]: 'using symbol'
// this is the only way to access symbol kind of value

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

console.log(user.greet1());

