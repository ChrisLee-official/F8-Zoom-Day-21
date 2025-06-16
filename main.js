// ------------------forEach2--------------------

Array.prototype.forEach2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// ------------------find2--------------------

Array.prototype.find2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i.this)) {
      return this[i];
    }
  }
};

// -----------------findIndex2--------------------

Array.prototype.findIndex2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

// -----------------filter2--------------------

Array.prototype.filter2 = function (callback, thisArg) {
  const length = this.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// -----------------map2--------------------

Array.prototype.map2 = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// -----------------every2--------------------

Array.prototype.every2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
};

// -----------------some2--------------------

Array.prototype.some2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

// -----------------reduce2--------------------

Array.prototype.reduce2 = function (callback, initialValue) {
  const length = this.length;
  let i = 0;
  let accumulator = initialValue;

  if (arguments.length < 2) {
    i = 1;
    accumulator = this[0];
  }

  for (; i < length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// -----------------Test Case--------------------

const numbers = [5, 10, 15, 20];
const array = [5, 10, 15, "Twenty", "25", , 50];
const fruits = ["banana", "peach", "durian", "apple"];
const mixOfType = ["mixing", "1234", 0, 123, "", null, undefined];
const users = [
  { name: "John", age: 20 },
  { name: "Sam", age: 25 },
  { name: "Alex", age: 30 },
];

// Testing forEach2
console.log("Testing forEach2");

// -----------------Exam 1--------------------
let result = [];
numbers.forEach2((num) => result.push(num * 2));
console.log(result);

// -----------------Exam 2--------------------
array.forEach2((value, index) =>
  console.log(`Value: ${value} - Index: ${index}`)
);

// -----------------Exam 3--------------------
fruits.forEach2((fruit) => console.log(fruit));

// Testing find2
console.log("Testing find2");
// -----------------Exam 1--------------------
console.log(numbers.find2((number) => number > 3));

// -----------------Exam 2--------------------
console.log(array.find2((value) => value === 40));

// -----------------Exam 3--------------------
console.log(fruits.find2((fruit) => fruit === "apple"));

// Testing findIndex2
console.log("Testing findIndex2");
// -----------------Exam 1--------------------
function indexOfNumber(number) {
  let indexOfNumber = numbers.findIndex2((num) => num === number);
  console.log(`Index of number "${number}" is ${indexOfNumber}`);
}
indexOfNumber(2);

// -----------------Exam 2--------------------
function indexOfStinky(stinky) {
  let indexOfStinky = fruits.findIndex2((fruit) => fruit === stinky);
  console.log(`Index of "${stinky}" is ${indexOfStinky}`);
}
indexOfStinky("durian");

// -----------------Exam 3--------------------
function indexOfUser(user) {
  let indexOfUser = user.findIndex2((u) => u.age > 30);
  console.log(`Index of user old than 30 is ${indexOfUser}`);
}

indexOfUser(users);

// Testing filter2
console.log("Testing filter2");
// -----------------Exam 1--------------------
console.log("List of Even Numbers:");
console.log(numbers.filter2((number) => number % 2 === 0));

// -----------------Exam 2--------------------
console.log("List of users younger than 35: ");
console.log(users.filter2((user) => user.age < 35));

// -----------------Exam 3--------------------
console.log("List of value is not falsy:");
console.log(mixOfType.filter2((value) => Boolean(value) !== false));

// Testing map2
console.log("Testing map2");
// -----------------Exam 1--------------------
console.log(numbers.map2((number) => number * 2));

// -----------------Exam 2--------------------
console.log(array.map2((number) => number / 2));

// -----------------Exam 3--------------------
console.log(fruits.map2((fruit) => fruit + "regular"));

// Testing every2
console.log("Testing every2");
// -----------------Exam 1--------------------
console.log(`All value of list [${numbers}] type is number??`);
console.log(numbers.every2((value) => typeof value === "number"));

// -----------------Exam 2--------------------
console.log(`All value of list [${array}] type is number??`);
console.log(array.every2((value) => typeof value === "number"));

// -----------------Exam 3--------------------
console.log("All users have old enough to drink??");
console.log(users.every2((user) => user.age > 18));

// Testing some2
console.log("Testing some2");
// -----------------Exam 1--------------------
console.log(`Have number of list [${numbers}] greater than 7??`);
console.log(numbers.some2((number) => number > 7));

// -----------------Exam 2--------------------
console.log(`Have number of list [${numbers}] lesser than 2??`);
console.log(numbers.some2((number) => number < 2));

// -----------------Exam 3--------------------
console.log(`Have user younger than 18??`);
console.log(users.some2((user) => user.age < 20));

// Testing reduce2
console.log("Testing reduce2");
// -----------------Exam 1--------------------
console.log(`Sum of list [${numbers}]:`);
console.log(numbers.reduce2((total, number) => total + number));

// -----------------Exam 2--------------------
console.log(`Multiply list [${numbers}] and double result:`);
console.log(numbers.reduce2((total, number) => total * number, 2));

// -----------------Exam 3--------------------
console.log("List User Name:");
let listUserName = users.reduce2((list, user) => {
  list.push(user.name);
  return list;
}, []);
console.log(listUserName);
