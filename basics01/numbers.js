const score=100
// console.log(score);

const balance=new Number(99);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // => for precision 

const otherNum=14.28987

// console.log(otherNum.toPrecision(4)); // for round off
// console.log(otherNum.toPrecision(3))

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// *************** Maths  *******************
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5)); // normal working
// console.log(Math.ceil(4.3)); // ceil always gives upper value
// console.log(Math.pow(2,3));
// console.log(Math.max(2,4,532,2));
// console.log(Math.min(2,365,23,-1));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);

const min=10
const max=20


console.log(Math.floor(Math.random()*(max-min +1)) +min);