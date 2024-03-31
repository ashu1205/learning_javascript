function sayMyName(){
    console.log("ashutosh chahar");
    console.log("ashutosh chahar");
    console.log("ashutosh chahar");
    console.log("ashutosh chahar");
    console.log("ashutosh chahar");
}

// console.log(sayMyName); // giving reference of function ,not executing
// console.log(sayMyName());

// function add(one, two){
//     console.log(one+two);
// }

// parameters are variable declared in the function definition
// and arguments are the actual values passed to the function
// log(add(9,8))


function add(one, two){
    return one+two;
    // function never executes after return statement
    console.log("ashutosh");

}
// console.log(add(9,7));

function loginUserMessage(name="sam"){ // default argument -if nothing is passed otherwise passed then it is overridden
    // if(name===undefined){
    //     console.log("please enter your name");
    //     return
    //     // return console.log("please enter your name"); // print then undefined
    // }
    if(!name){
        console.log("enter your name");
        return
    }
        return `${name} just logged in`;

}

// console.log(loginUserMessage("ashutosh"));

// what if nothing is passed
// console.log(loginUserMessage()); //-> undefined because name is not defined or not passed

// *************
// what if i dont know the numbers of parameters ?

function calculateCartPrice(...nums){
    return nums;
}

// console.log(calculateCartPrice(100,200,300,));

// ... this is rest operator because it takes rest all things 
function calculateCartPrice(val1, val2,...nums){
    //first and second are passed to val1,val2 and REST are passed to nums
    return nums;
}

// console.log(calculateCartPrice(20,90,80));


///function and objects

const user={
    name:"ashutosh",
    age:21
}

function handleObject(object){
    return `${object.name} is here with age ${object.age}`
}

// console.log(handleObject(user))

// console.log(handleObject({
//     name:"sam",
//     age:3
// }));

const arr =[100,400,500]

function handleArray(anyArr){
    return anyArr[1]
}
console.log(handleArray(arr));