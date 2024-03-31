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
    console.log(a);
}

console.log(a);
// console.log(b);
// console.log(c);

const array=[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// console.log(index); -> undefined because it is inside for block scope
