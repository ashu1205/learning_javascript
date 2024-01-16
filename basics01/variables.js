var a=10;

let b=40;

const c=90;

// c=80  cannot change the value of const variable

var a="abs"; //this creates unexpected behaviour , i.e its not used anymore


// let b=30; not allowed for let and const , they cant be redeclared wihin their scope

//  earlier there was no concept of scope which created problems 

console.table([a,b,c])

//note : prefer not to use 'var' due to scope issues --> which leads to confusion