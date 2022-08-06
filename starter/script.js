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

  // declaring a method using the new object literal syntax
  // by providing an object of options as an argument to a function and immediately destructuring it;we don't have to worry about the order at which we pass in arguments to a function since the destructuring operator will handle all that for us
  // WE JUST PASS IN AN OBJECT OF OPTIONS AND THE OBJECT WILL BE DESTRUCTURED TO THE CORRECT ARGUMENTS REQUIRED TO CALL THAT FUNCTION
  // PASS IN AN OBJECT OF OPTIONS THEN DESTRUCTURE IT TO THE REQUIRED ARGUMENTS
  orderDelivery({ time = "23.00", address, mainIndex = 1, starterIndex = 1 }) {
    console.log(time, address, mainIndex, starterIndex);
    console.log(
      `Order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} willl be deliver to ${address} at ${time}`
    );
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

// passing an object of options when calling a function
// this object can then be destructured into constituent variables that the function parameter requires
// this is really handy coz it enables us not to really have to think about the order that  we  have to pass in arguments when calling functions,   WE CAN JUST PASS IN AN OBJECT OF OPTIONS AND THE FUNCTION WILL AUTOMATICALLY DESTRUCTURE IT WITH THE CORRECT ORDER OF ARGUMENTS
restaurant.orderDelivery({
  time: "23.30",
  address: "sagalla",
  mainIndex: 2,
  starterIndex: 2,
});

// Spread operator
// the spread operator is available on all javascript iterables ,eg strings,arrays,sets,maps
// MAJOR ---we use the spread operator to unpack the elements of an array into individual values separated by a comma
// the spread operator will expand an array into its individual elements
// we mostly use the spread operator in cases where we'd require multiple values separated by commas eg in an array litteral or when passing arguments to a function
// we can only use the spread operator when building an array or when passsing values to a function

const arr = [5, 6, 7];
console.log(...arr);
const numb = [2, 3, 4, ...arr];
console.log(numb);

// a more practical example of array destructuring
const menu = [...restaurant.mainMenu, "ugali", "skuma"];
console.log(menu);

// one of the most typical use case of the spread operator is to create shallow copies of arrays and also to merge separate arrays into one array

// 1.creating shallow copies of array

const trueUnrelatedCopy = [...restaurant.mainMenu];
console.log(trueUnrelatedCopy);

// 2. joining arrays into one

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// iterables are : strings ,arrays,maps, sets .NOT objects
// 1.using the spread operator on  a string
const str = "Mjomba";
console.log(...str);
const nameArr = [...str, , "s"];
console.log(nameArr);
// // destructuring objects
// // when destructuring objects ,we have to provide the variable names that ecactly match the property names of the vlues we are trying to unpack from an object
// const { name, location, mainMenu } = restaurant;
// console.log(name, location, mainMenu);

// // using variable names that are different from the property names when extracting
// const { name: hotel, location: place, mainMenu: menuMain } = restaurant;
// console.log(hotel, location, menuMain);

// // setting default values when destructuring objects
// // we simply use the assignment operator to assign default values when destructuring
// // setting up default values is helpful especially in cases where we dont know how the data we'll recieve looks like eg certain properties might not exist on the object so it is prudent that we account for such cases
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let d = 111;
// let e = 999;
// const obj = { d: 23, e: 7, f: 14 };
// console.log(obj);
// // we need to wrap them up in parenthesis
// ({ d, e } = obj);
// console.log(d, e);

// // destructuring Nested Objects
// const { openingHours } = restaurant;
// // the syntax looks a bit weird
// // destructuring the sat object that we have extracted from opening
// const {
//   sat: { open, close },
// } = openingHours;
// console.log(open, close);

// // alternative syntax
// // const { openingHours :{sat :{open,close}}} = restaurant;
// // console.log(open,close);

// // Array destructuring
// // desturucturing is simply a way of unpacking values from an array or object into their own separate variables
// // we use array destructuring to  retrieve elements from an array and store them into variables in a very easy way

// // first example of how we would have achived this with the old syntax
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// // newer way to achieve the same results with array destructuring
// // we use square brackets when destructuring arrays and pass in variable names as elements,the variable name w
// const [x, y, z] = arr;
// console.log(x, y, z);

// // when destructuring ,we o not have to unpack all the elements from an array ,instead the destructuring operator [] will only map the variables to their  corresponding element of the same index of the array that is being destructured
// const [first, second] = restaurant.categories;
// console.log(first, second);

// // when we want to skip over elements when destructuring ,we simply leave a blank space and the destructuring operator [] will only map the variables to their  corresponding element of the same index of the array that is being destructured
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // experimenting on switching these two variables
// // const temp = main;
// // main = secondary;
// // console.log(main);
// // secondary = temp;
// // console.log(secondary);

// // achieving the same switching resultas with the destructuring operator
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // we can  have a function return an array and then immediately destructure that array enabling us to return multiple values from an array

// console.log(restaurant.order(1, 2));
// // the order() method returns an array that we immediately destructure into separate variables allowing us to return multiple values from a function in a sense
// // destructuring allows us to recieve multiple return values froma function
// const [starter, maindish] = restaurant.order(1, 2);
// console.log(starter, maindish);

// // destructuring nested arrays
// const nestedArray = [3, 4, [5, 6]];
// // destructuring works basically the same way when it comes to nested arrays,we can simply destructure na array inside an  array
// // the syantax looks like using the destructuring operator inside another destructuring operator,no big deal,it sounds complicated but it's not
// // nested destructuring basicaly looks like doing destructuring inside of destructuring
// const [uno, , [five, six]] = nestedArray;
// console.log(uno, five, six);

// // setting default values when destructuring
// // setting default values is so simple
// // if the element we are trying to destructure does not exist,it will simply be replaced by the default value of the destructuring operator
// const [p = 1, q = 1, r = 1] = [8, 6];
// console.log(p, q, r);
