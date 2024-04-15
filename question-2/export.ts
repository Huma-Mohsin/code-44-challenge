// //Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.

//Solution.

 export class Calculator{
    add(a:number,b:number){
        return a+b;
    }
sub(a:number,b:number){
    return a-b;
}
multiply(a:number,b:number){
    return a*b;
}
divide(a:number,b:number){
    return a/b;
}
modulus(a:number,b:number){
    return a%b;
}
}
//Author-Huma Mohsin