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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here's your delicious  pasta of ${ing1} , ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
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

//ordering pizza
restaurant.orderPizza("ham", "cheese", "olives");

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
// we use the spread operator in places where we want an ordered list of values separated by commas(WHEN WE WANT AN ARRAY)
// const arr = [5, 6, 7];
// console.log(...arr);
// const numb = [2, 3, 4, ...arr];
// console.log(numb);
//
// a more practical example of array destructuring
// const menu = [...restaurant.mainMenu, "ugali", "skuma"];
// console.log(menu);
//
// one of the most typical use case of the spread operator is to create shallow copies of arrays and also to merge separate arrays into one array

// 1.creating shallow copies of array
// not a copy but just a different variable pointing to the same object(arrays are objects) in memory
const relatedCopy = restaurant.mainMenu;
// proof that this is just a refrence to the same object
// console.log(relatedCopy === restaurant.mainMenu);

// the spread operator creates a shallow copy of the array and doesn't refer to the same object in memory
const trueUnrelatedCopy = [...restaurant.mainMenu];
// console.log(trueUnrelatedCopy);
// // prooof that this is a shallow copy and not the same array(object)
// console.log(trueUnrelatedCopy === restaurant.mainMenu);
//
// 2. joining arrays into one
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// iterables are : strings ,arrays,maps, sets .NOT objects
// 1.using the spread operator on  a string
// const str = "Mjomba";
// console.log(...str);
// const nameArr = [...str, , "s"];
// console.log(nameArr);
//
// real world example of using the spread operator to pass arguments to functions
// const ingredients = [
//   prompt(`let's make pasta: Ingredient 1 ?`),
//   prompt(`ingredient 2?`)
//   prompt(`ingredient 3 ?`),
// // ];
// console.log(ingredients);
// // real world example of using the spread operator to pass arguments to functions
// restaurant.orderPasta(...ingredients);

// since es2018 ,we can use the spread operator on objects even though objects aren't iterable
// Objects
// we can use the spread operator on objects to create copies of the object
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: "mjomba" };
// console.log(newRestaurant);

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

//the rest operator syntax takes multiple values and condesnse them into an array
//the rest syntax looks similar to the spread operator
//the main difference is that the spraed operator is used on the right handside of the assignment operator

//---example of the difference between the spread and rest opearator
//-example 1

//SPREAD bcz its on the right hand side of the assignment operator
const arr2 = [1, 2, ...[3, 4]];
// console.log(arr2);

//rest synatx because it's to the left of the assignment opearator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//MAJOR ---we use the rest operator to pack individual values into an array,it's kinda like the opposite of the spread operator:
//the typical use case of the rest operator is to collect the rest of the elements that are unused in destructuring and place them into their own array
//the rest element must always come last
const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, other);
//while destructuring,the rest synatx shouild always come last
//the rest operator will not include any skipped over variables/values ,it will always include the REST of the elements that are left after destructuring

//the rest pattern with objects
//the rest operator will pack the  rest of the remaining properties into their own object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions
//rest arguments / parameters
//the rest operator will take multiple values and packs them into an array/objects
//such a function can take any number of arbitrary arguments and still work perfectly fine
//this is because ,no matter how many arguments we pass when calling the functions ,they'll just be packed into an array  by the rest operator ,and we can work on that array
// const add = function (...numbers) {
//   console.log(numbers);
//   let summ = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     summ += numbers[i];
//   }
//   console.log(summ);
// };
//
// add(2, 3);
// add(4, 5, 6, 7);
// add(12, 13, 14, 15);
//
// const x = [23, 5, 7];
// add(...x);
//
// for (const num of x) {
//   console.log(num);
// }
// const meow = "woof";
// const cat = function () {
//   console.log(meow);
// };
// console.log();
// console.log(meow);
//

//SHART CIRCUITING
// console.log("-----short circuiting using the or operator-------");
//the logical or || oerrator
//in the case of the logical or operator,it returns the first truthy values in the evaluation and shorts circuits the  rest of the evaluation
//in the case where  all values in the evaluation are true ,it'll return the first value
//in the case where all values are falsey,it;l return the last falsey value
// console.log(2 || "Mjomba");
// console.log("" || 23);
// console.log(true || 0);
// console.log(undefined || null);
// console.log(0 || undefined || "" || false);
//
//in the case of the logical or operator,it returns the first truthy values in the evaluation and shorts circuits the  rest of the evaluation
// console.log(undefined || 0 || "" || "hello" || 23);
// a more practical application
// restaurant.numGuests = 35;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//doing the same thing but using the short circuit evaluation of the or || operator
// we can use the or operator to set default values if the first operand is falsey
const guest2 = restaurant.numGuests || 23;
// console.log(guest2);
//
// console.log(guests1);
// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// console.log("short circuiting using the and && opearator----");
//the logical and opearator returns the first falsey values and exits evaluation
//in the case where all values are truthy,it'll return the last truthy value in the evaluation
// console.log(0 && "meow");
// console.log("cat" && "meow" && "purr");
// console.log("7" && 7 && 0 && "woof");
//
// a more practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "olives", "ham");
}
//another way to do this using the logical and && operator
//we can use the and operator to execute code in the second operand if the first operand is truthy
restaurant.orderPizza && restaurant.orderPizza("njahi", "nduma");

//THE NULLISH COALESCING operator
// restaurant.numGuests = 0;
//the nullish coalescing operator works on the concept of nullish values ie only null and undefined
//ONLY NON-NULLISH VALUES WILL SHORT CIRCUIT THE EVALUATION
//the evaluation will only continue if the first value was nullish or undefined ,or else it'll just return the first  non-nullish value and short circuit the evaluation
//so in this case ,even though though 0 is falsey,it isn't nullish so it won't short circuit the evaluation
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// console.log(1 ?? undefined);
// console.log(2 ?? null);
// console.log(1 ?? 2 ?? 3);
// //in the case where all values are nullish ,it'll return the last nullish value
// console.log(null ?? undefined);
//the evaluation will only continue if the first value was nullish or undefined ,or else it'll just return the first  NON-NULLISH value and short circuit the evaluation
console.log(null ?? "Meow");

//logical assignment operators

const rest1 = {
  name: "hoteli",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "hoteli",
  owner: "Ruth Mwathi",
};

//the or  operator works by returning the first truthy value and short circuiting the rest of the evaluation
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
//
//the logical or || assignment operator
//this operator assigns a value to a variable if that variable is currently falsey
// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;
//

//LOGICAL NULLISH ASSIGNMENT operator
//the nullish assignment operator will assign  a value to a variable if the variable is currently nullish
//if the variable is not nullish ,it will simply retain it's value
rest2.numGuests ??= 10;
rest1.numGuests ??= 10;

console.log(rest2, rest1);

//LOGICAL AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && "shddjahkhdh";
// rest2.owner = rest2.owner && "hsjhajdajskjask";
//
rest1.owner &&= "ddsfsfsfsfs";
rest2.owner &&= "jjagdjagdjdgdg";

console.log(rest2, rest1);

//coding challenge 16
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
const [player1, player2] = game.players;
console.log(player1);
// const player2 = game.players[1];
console.log(player2);

//2. The first player in any player array is the goalkeeper and the others are fieldplayers. For Bayern Munich (team 1) create one variable ('gk') with thegoalkeeper's name, and one array ('fieldPlayers') with all the remaining 10field players

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22players)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4.During the game, Bayern Munich (team 1) used 3 substitute players. So create anew array ('players1Final') containing all the original team1 players plus'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5.Based on the game.odds object, create one variable for each odd (called'team1', 'draw' and 'team2')
console.log(game.odds);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, team2, draw);

//6.Write a function ('printGoals') that receives an arbitrary number of playernames (not an array) and prints each of them to the console, along with thenumber of goals that were scored in total (number of player names passed in)
function printGoals(...playernames) {
  for (const player of playernames) {
    console.log(
      `${player} scored a goal,a total of  ${playernames.length} goals were scored in that match`
    );
  }
}
printGoals("Ruth", "Mwathi", "Gideon");
printGoals(...game.scored);

//The team with the lower odd is more likely to win. Print to the console whichteam is more likely to win, without using an if/else statement or the ternaryoperator.
team1 < team2 && console.log("team1 is more likely to win");
