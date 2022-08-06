"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    // returning an array
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Array destructuring
// desturucturing is simply a way of unpacking values from an array or object into their own separate variables
// we use array destructuring to  retrieve elements from an array and store them into variables in a very easy way

// first example of how we would have achived this with the old syntax
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// newer way to achieve the same results with array destructuring
// we use square brackets when destructuring arrays and pass in variable names as elements,the variable name w
const [x, y, z] = arr;
console.log(x, y, z);

// when destructuring ,we o not have to unpack all the elements from an array ,instead the destructuring operator [] will only map the variables to their  corresponding element of the same index of the array that is being destructured
const [first, second] = restaurant.categories;
console.log(first, second);

// when we want to skip over elements when destructuring ,we simply leave a blank space and the destructuring operator [] will only map the variables to their  corresponding element of the same index of the array that is being destructured
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// experimenting on switching these two variables
// const temp = main;
// main = secondary;
// console.log(main);
// secondary = temp;
// console.log(secondary);

// achieving the same switching resultas with the destructuring operator
[main, secondary] = [secondary, main];
console.log(main, secondary);

// we can  have a function return an array and then immediately destructure that array enabling us to return multiple values from an array

console.log(restaurant.order(1, 2));
// the order() method returns an array that we immediately destructure into separate variables allowing us to return multiple values from a function in a sense
// destructuring allows us to recieve multiple return values froma function
const [starter, maindish] = restaurant.order(1, 2);
console.log(starter, maindish);
