// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;

// 2. Require your model (and possibly your extra data source);

const Vampire = require('./models/vampire');
const VampireData = require('./populateVampires');

// 3. Connect your database and collection name

mongoose.connect('mongodb://localhost:27017/vampires', {
	useNewUrlParser: true
});

// 4. Open your mongoose connection

db.on('error', (err) => {
	console.log(err, ' this is the error message');
});

db.on('connected', () => {
	console.log('db is connected')
})

db.on('disconnected', () => {
	console.log('db is disconnected')
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(VampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data
Vampire.create({
  name: 'Buck',
  hair_color: 'blonde',
  eye_color: 'red',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['trucks','blood'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 3
})

Vampire.create({
  name: 'Larry',
  hair_color: 'brown',
  eye_color: 'red',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['board-games','murder'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 9
})

Vampire.create({
  name: 'Claudia',
  hair_color: 'blonde',
  eye_color: 'red',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['broadway','sacrifice'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 4
})

Vampire.create({
  name: 'May',
  hair_color: 'brown',
  eye_color: 'red',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['acult','dating'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 17
})
mongoose.connection.close();
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
