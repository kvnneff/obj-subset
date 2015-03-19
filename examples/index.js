var isSubset = require('..');
var users = require('./users');
var searchAttributes;

searchAttributes = [
  {
    first_name: 'Amy',
    last_name: 'Mccoy',
    email: 'amymccoy72@gmail.com'
  },
  {
    email: 'jmeyer2@posterous.com'
  },
  {
    country: 'Chile'
  }
];

/**
 * Print the found user
 * @param  {Object} user User object
 */
function found(user) {
  console.log(JSON.stringify(user, null, 2));
};

/**
 * Find users with given `attrs`
 * @param {Object} attrs Known attributes
 */
function queryUsers(attrs) {
  foundUsers = [];
  console.log('');
  console.log('--------------');
  console.log('Searching for:')
  console.log('--------------');
  console.log(JSON.stringify(attrs, null, 2));

  users.forEach(function (user) {
    if (isSubset(user, attrs)) foundUsers.push(user);
  });

  console.log('');
  console.log('--------------');
  console.log('Results:')
  console.log('--------------');
  console.log('');

  if (!foundUsers.length) {
    console.log('No users matched the criteria');
  } else {
    foundUsers.forEach(found);
  }
}

searchAttributes.forEach(queryUsers);
