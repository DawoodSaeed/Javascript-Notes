function speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

const whiteRabbit = {
  type: "white",
  speak,
};

const hungryRabbit = {
  type: "hungry",
  speak,
};

whiteRabbit.speak("Oh my fur and whiskers");
hungryRabbit.speak("Got any carrots?");

speak.call(hungryRabbit, "I am hungry");
speak.apply(hungryRabbit, ["I am hungry"]);
speak.bind(hungryRabbit, "I am hungry")();

let finder = {
  find(array) {
    console.log(this.value);
    return array.some(function (v) {
      console.log(this.value);
      return v == this.value;
    });
  },
  value: 5,
};
console.log(finder.find([4, 5]));

let empty = {};
console.log(empty.toString);

const array = [1, 2, 3, 4];

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

let rabbitPrototype = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

const blackRabbit = Object.create(rabbitPrototype);
blackRabbit.type = "Black";

blackRabbit.speak("I am the fear and darkness.");

// constructor Function;

const makeRabbit = function (type) {
  const rabbit = Object.create(rabbitPrototype);
  rabbit.type = type;
  return rabbit;
};

const newRabbit = makeRabbit("rapist");
newRabbit.speak("Shame on me");

// ES6 class syntax behind the uses of constructor function;
class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

const newRabbit2 = new Rabbit("black");
newRabbit2.speak("I am the fear and darkness.");

function ArchaicRabbit(type) {
  this.type = type;
}

ArchaicRabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

const oldSchoolRabbit = new ArchaicRabbit("Old School");
oldSchoolRabbit.speak();

console.log(ArchaicRabbit.__proto__);
// Theorey
// 1. Methods are nothing more then properties holding the values;
// 2. Methods needs to do something on the object it is called on;
// 3. "this" has special meaning in methods. It refer to the object that called it.
// 4. You can pass it explicitly by using the call(), apply() and bind() methods.
// 5. Arrow function does not have there own "this" binding rather then use the wrapper
//    function's "this" binding

// PROTOTYPES:
// 1. If he object does not have the propery it will look for that in the prototype if it does not found
//    it will look in the prototype of the prototype and so on until Object.prototype.

// 2. You create an Object with specific prototype using the Object.create();
// 3.

// Constuctor  prototype is always Function.prototype since it is a function.
// And that prototype will hold the prototype need for other instances during there creation

// Constructor Name start with Capital letter.
// Can Omit class name when using as a Expression
const object = new (class {
  getName() {
    console.log("name");
  }
})();
object.getName();
