const ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};

const newAges = new Map();

for (const [key, value] of Object.entries(ages)) {
  newAges.set(key, value);
}

if (Object.hasOwn(ages, "toString")) console.log("True");
console.log(newAges);


let killerRabbit = {
    type: 'killer',
    toString: function() {
      return `a ${this.type} rabbit`;
    }
  };


  const newObject = Object.create(killerRabbit);
  const newObject2 = Object.create(killerRabbit);

  