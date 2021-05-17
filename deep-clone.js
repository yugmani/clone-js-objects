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
