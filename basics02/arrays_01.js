//arrays 

const arr = [0,1,2,3,4, true ,"ashutosh"] /// prototype - array -> proto -> object
// can have mixed datatype 
// resizable

// console.log(arr[0]); // 0-based indexing
// all built-in array copy operations creates shallow copies(passed by reference || shares the same reference)


// array methods
const arr1=new Array(1,2,3,5,4,5);

arr1.push(7);
arr1.push(6); // adding value to the array 
// console.log(arr1);
arr1.pop(); // delete the last element
// console.log(arr1);

arr1.unshift(10); // adds element to the start of array
// console.log(arr1);
arr1.shift()  // deletes the first element
// console.log(arr1);


// ********** questionairre methods *********
// console.log(arr1.includes(7)); // returns true if element is present
// console.log(arr1.indexOf(5)); // returns *first-index* of element 
                             // returns -1 if not present 
// console.log(arr1.lastIndexOf(5));
// console.log(arr1.findIndex((val)=>{return val%2==0})); // returns *element index*
// console.log(arr1.find((val)=>{return val%2==0})); // returns *element value*


/// 
const newArr=arr1.join() // converts into string separated with commas

// console.log(arr1);
// console.log(newArr);
// console.log(typeof newArr);


// ****** Slice , splice ***
// arr1=new Array(1,2,3,5,4,5);
console.log("before slice "+arr1);
const myn1= arr1.slice(1,3)
console.log("sliced array "+myn1);
console.log("after slice "+arr1);
// slice -> 1) last index is not included 
//          2) original array is not modified 

const myn2=arr1.splice(1,3)
console.log("spliced array "+myn2);
console.log("after spliced "+ arr1);
// splice -> 1) last index is included 
//           2) original array is modified
//           *** given range elements are deleted from the array 