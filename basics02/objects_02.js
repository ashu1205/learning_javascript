const user = new Object();  //--> creates singleton object (only difference) 
// console.log(user);

const regularUser={
    email:"helloboy@gmail.com" ,
    fullname:{
        userFullname:{
            firstName:"krish",
            lastName:"babua"
        }   
    }
}

// console.log(regularUser.fullname.userFullname.firstName);  //option chaining when working with api's

const obj1={
    1:"A",
    2:"B"
}
const obj2={
    3:"C",
    4:"D"
}

// const obj3={obj1 , obj2};
// console.log(obj3);

// const obj3=Object.assign(obj1,obj2);

// console.log(obj1);
// console.log(obj3);
// both are same because  Object.assign(target , source1 , source2 ,...);
//returns the target

const obj3=Object.assign({} ,obj1,obj2); // good practice so first source is not changed
// console.log(obj1); --> this time it stays the same ,because we passed {} as a target
// console.log(obj3);

//modern method
const obj4={...obj1,...obj2}
// console.log(obj4); 


const user2=[
    {
        id:"11",
        name:"alex"
    } ,
    {
        id:"11",
        name:"alexa"
    } ,
    {
        id:"11",
        name:"alex"
    } ,
]
// console.log(user2[1]);
// console.log(user2[0].id);

const user3={
    name:"ashutosh",
    age:21,
    email:"hellobro@gmail.com"
}

// console.log(Object.keys(user3)); // -->returns arrays of keys(string)
// console.log(Object.values(user3)); // -->returns arrays of values
// console.log(Object.entries(user3)); //->returns array of arrays of key value pair

// output ->
// [
//     [ 'name', 'ashutosh' ],
//     [ 'age', 21 ],
//     [ 'email', 'hellobro@gmail.com' ]
//   ]


//   to check if a property of object exists ? 
console.log(user3.hasOwnProperty("age"));