// var c=300 
// not recommended to use because of its scope behavior

let a=900;
// global scope
if(true){
    // block scope
    let  a=10
    const b=20
    // var c=30
    // c=90 --> its same as var
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

const array=[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// console.log(index); -> undefined because it is inside for block scope

function one(){
    const username="ashutosh"

    function two() {
        console.log(username);
        const website="cm@codeforces"
        console.log("age "+age);
    }
    // two() --> cannot access before initialisation

    const age=21 
    // console.log(website);
    // two()
}

// two() -> not defined (outside of scope)
// one()


if(true){
    const username="ashutosh"

    if(username==="ashutosh"){
        const website="cm@codeforces"
        // console.log(username+website);
    }
    // console.log(website); -->same as functions -> outside the inner if block scope
}

// console.log(username); // ->not defined -> outside the outer if block scope 

//calling before declaration -> hoisting - declaration are moved to the top of program 
console.log(addOne(4))
function addOne(num){
    return num+1
}
// console.log(addTwo(5));
// this gives an error -> ReferenceError: Cannot access 'addTwo' before initialization
// because we are holding it in a variable ,and we cannot access a variable before initialization
// thats in Temporal deadzone
const addTwo=function (num){
    return num+2
}
console.log(addTwo(5));