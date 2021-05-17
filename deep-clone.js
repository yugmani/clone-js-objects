// JSON.parse(JSON.stringify(obj))
//This method converts the object to a string with JSON.stringify() and then converts it back to a JSON.parse() object.

// This method is effective with simple objects but not when one of the properties is a function (Example 4).

// 1.
const network = {
  name: 'Silvia',
  surname: 'White',
  social: {
    twitter: '@manoweb',
    facebook: 'ManoWeb'
  }
};

const network2 = JSON.parse(JSON.stringify(network));
network2.social.facebook = 'manoagency';

console.log('network:', network);
console.log('network2:', network2);

// Exploiting recursive functions in Deep Clone

// Another very interesting and elegant way to make deep copies of objects is to use recursive functions (Example 5).
// We create a function deepClone(object) to which we pass as an argument the object we want to clone.

// Inside the function, a local variable clone is created, which is an empty object where each of the properties that will be cloned from the starting object will be added.
//If the property is not an object, it is simply cloned and added to the new clone object.
// If the attribute is an object, the deepClone(value) function is executed again, passing the value of the property (in this case the object) as a parameter, and the same process is repeated.

function deepClone(object) {
  var clone = {};
  for (var key in object) {
    var value = object[key];
    if (typeof value != 'object') {
      clone[key] = value;
    } else {
      clone[key] = deepClone(value);
      //Here the object property is also an object.
      //By means of a recursive function, what we do is to clone the object that
      //is on the second or next level.
    }
  }
  return clone;
}

console.log(deepClone({ value1: 1, value2: { value3: 2 } }));
//{value1:1,value2:{value3:2}}
console.log(deepClone({ value1: 1, value2: { value3: { value3b: 3 } } }));
//{value1:1,value2:{value3:{value3b:3}}}
