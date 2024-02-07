const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]);

// * push method adds everything as an element
// ** it modifies the original array 
//  it took the even array as element
// arrays can take any type of data ***


// *****************************
// 1)
// concat -> combines two or more arrays and **returns a new array**
// so we need to store it
const merged_arr=marvel_heros.concat(dc_heros)
// console.log(merged_arr);
// ***** trying to concat() more than two arrays
const another_arr=["ashutosh"]
const more_than_two=marvel_heros.concat(another_arr,dc_heros)
// console.log(more_than_two);
// it worked as expected in the same order 

// 2)
// spread(...) operator spreads out each element of the array
const all_merged=[...marvel_heros, ...dc_heros]
// console.log(all_merged); 

// *******************************
const alll_merged=[...marvel_heros, dc_heros]
// this will work same as marvel_heros.push(dc_heros)

/////////////////\\\\\\\\\\\\\\\\\\\\\\\

const different=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

// const all_different=different.flat(Infinity);
const all_different=different.flat(1);
// console.log(all_different);
// *** flat() -> it takes depth as an parameter upto which you want to flatten the array
// --> returns a new array with all sub-arrays elements added into it until the specified depth , 
//  rest remains same**



// *********************
// console.log(Array.isArray("ASHUTOSH CHAHAR"));
// isArray() -->returns boolean whether it is array or not
const new_Arr=Array.from("ASHUTOSH CHAHAR")
// console.log(new_Arr)

console.log(Array.from({naam:"ashutosh"})) /// interesting -->
// will return a [] empty array --> because we need to specify 
// whether to make array of keys or values

// Array.from() --> returns || Creates an array from an iterable object.
// ***** converts even space as elememt of array *****
// o/p
// [
//   'A', 'S', 'H', 'U',
//   'T', 'O', 'S', 'H',
//   ' ', 'C', 'H', 'A',
//   'H', 'A', 'R'
// ]



//*************************
let score1=1
let score2=2
let score3=3

// const all_score=Array.of(score1,score2,score3)
// console.log(all_score)
// Array.of() --> Returns a new array from a set of elements.

// console.log(Array.of({naam:"ashutosh"},"outside"));