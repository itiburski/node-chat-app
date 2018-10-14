let moment = require('moment');

// epoch: Jan 1st 1970 00:00:00 am
// 0 = epoch


// let date = new Date();
// console.log(date.getMonth());


// let date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// CHALLENGE
// 10:35 am
// 6:01 am

let dateChallenge = moment();
console.log(dateChallenge.format('h:mm a'));


var createdAt = 0;
let dateCreated = moment(createdAt);
console.log(dateCreated.format());

new Date().getTime();
let someTimestamp = moment().valueOf();
console.log(someTimestamp);
