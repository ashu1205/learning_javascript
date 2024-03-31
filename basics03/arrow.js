const user ={
    username:"ashutosh",

    welcomeMessage:function(){
        console.log(`${this.username} welcome to this site`);
        console.log(this);
    },
}
// this keyword refers to the current context where it is used

// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage(); // this time context(environment or current values) is changed in above line 

// console.log(this);// ->it will give us empty object because there is nothing in global context

function grind(){
    // console.log(this);
    const username="ashutosh"
    function innerGrind(){
        // console.log(this);
        //here it refers to global object(both inner and outer)

        console.log(this.username); //->undefined
        // this works in objects only
    }
    innerGrind()
    
}

// grind()

// const grind2=function (){
//     console.log(this.username); //->undefined
//         // this works in objects only
// }
// grind2()

// ---------- arrow function ------------
const grind2=()=>{
    console.log(this); //empty {} working as global scope only       
}

// grind2()

// different syntax to write arrow function
// 1)
const addTwo=(num1 , num2)=>{
    return  num1 + num2
}
// console.log(addTwo(2,3));

// 2)
// implicit return 
const add_two=(num1 , num2)=> num1 + num2

// console.log(add_two(4,5));

// 3)

const addtwo=(num1 , num2)=> (num1 + num2)
// console.log(addtwo(10,8));
//this () is usefull when returning objects

// const add= () => {username:"ashu"}
// ** this will return undefined 

// we have to use () to return objects

const add= () => ({username:"ashu"})

console.log(add());