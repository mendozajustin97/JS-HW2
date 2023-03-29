//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function display(){
    const person3 = {
        pizza:["Deep Dish","South Side Thin Crust"],
        tacos:"Anything not from Taco bell",
        burgers:"Portillos Burgers",
        ice_cream:["Chocolate","Vanilla","Oreo"],
        shakes:[{
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }]
    }
    for(const [key, value] of Object.entries(person3)){
        console.log(value)
    }
}
console.log(display())
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    Person.prototype.incrementAge = () => {
        this.age++;
    }
}
var josias = new Person('Josias', 26)
josias.printInfo()

var kevin = new Person('Kevin', 22)
kevin.printInfo()
kevin.incrementAge()
kevin.incrementAge()
kevin.incrementAge()
kevin.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function strLength(str) {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve("Big word")
        } else{
            reject("Small Number");
        }
    })
}

strLength("I love Ice cream")
    .then(result => console.log(result))
    .catch(error => console.log(error));

strLength("I like Pie")
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Code Wars Problem #1
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// Beginner - Reduce but Grow
// Solution
function grow(x){
    return x.reduce(function(product, n){
        return product * n;
    }, 1)
  }

// Code Wars Problem #2
// Vowel Remover
// Create a function called shortcut to remove the lowercase vowels 
// (a, e, i, o, u ) in a given string.

// Solution
function shortcut (string) {
    const vowels = /[aeiou]+/g;
    return string.replace(vowels, "");
  }