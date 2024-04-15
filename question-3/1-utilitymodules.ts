// //Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.

 
export const add=(a:number,b:number)=> a+b;

export const sub=(a:number,b:number)=> a-b;

export const multiply=(a:number,b:number)=> a*b;

export const divide=(a:number,b:number)=>a/b;

//In this example, we have four functions exported from the utility modules.ts :

// add: Adds two numbers a and b.
// subtract: Subtracts b from a.
// multiply: Multiplies a by b.
// divide: Divides a by b.

//These functions can be utilized in various scenarios where mathematical operations are required. (main.js)

//Author-Huma Mohsin