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

// destructuring objects
// when destructuring objects ,we have to provide the variable names that ecactly match the property names of the vlues we are trying to unpack from an object
const { name, location, mainMenu } = restaurant;
console.log(name, location, mainMenu);

// using variable names that are different from the property names when extracting
const { name: hotel, location: place, mainMenu: menuMain } = restaurant;
console.log(hotel, location, menuMain);

// setting default values when destructuring objects
// we simply use the assignment operator to assign default values when destructuring
// setting up default values is helpful especially in cases where we dont know how the data we'll recieve looks like eg certain properties might not exist on the object so it is prudent that we account for such cases
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

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

// destructuring nested arrays
const nestedArray = [3, 4, [5, 6]];
// destructuring works basically the same way when it comes to nested arrays,we can simply destructure na array inside an  array
// the syantax looks like using the destructuring operator inside another destructuring operator,no big deal,it sounds complicated but it's not
// nested destructuring basicaly looks like doing destructuring inside of destructuring
const [uno, , [five, six]] = nestedArray;
console.log(uno, five, six);

// setting default values when destructuring
// setting default values is so simple
// if the element we are trying to destructure does not exist,it will simply be replaced by the default value of the destructuring operator
const [p = 1, q = 1, r = 1] = [8, 6];
console.log(p, q, r);
