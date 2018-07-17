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

Vampire.collection.insertMany(VampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data

// Vampire.create({
//   name: 'Buck',
//   hair_color: 'blonde',
//   eye_color: 'red',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['trucks','blood'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 3
// })

// Vampire.create({
//   name: 'Larry',
//   hair_color: 'brown',
//   eye_color: 'red',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['board-games','murder'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 9
// })

// Vampire.create({
//   name: 'Claudia',
//   hair_color: 'blonde',
//   eye_color: 'red',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['broadway','sacrifice'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'f',
//   victims: 4
// })

// Vampire.create({
//   name: 'May',
//   hair_color: 'brown',
//   eye_color: 'red',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['acult','dating'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'f',
//   victims: 17
// })
mongoose.connection.close();
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// 1. db.vampires.find({'gender': 'f'})
// 2. db.vampires.find({victims: {$gt: 500}})
// 3. db.vampires.find({victims: {$lte: 150}})
// 4. db.vampires.find({victims: {$ne: 210234}})
// 5. db.vampires.find({victims: {$gt: 150, $lt: 500}})

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// 1. db.vampires.find({title: {$ne: null}})
// 2. db.vampires.find({victims: null})
// 3. db.vampires.find({victims: null, title: {$ne: null}})
// 4. db.vampires.find({victims: {$ne: null, $gt: 1000}})

/////////////////////////////////////////////////
// ### Select with OR
// 1. db.vampires.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]})
// 2. db.vampires.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]})
// 3. db.vampires.find({$or: [{victims: {$gt: 500}}, {loves: 'marshmallows'}]})
// 4. db.vampires.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]})

/////////////////////////////////////////////////
//### Select objects that match one of several values
// 1. db.vampires.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]})
// 2. db.vampires.find({loves: 'brooding'})
// 3. db.vampires.find({$or: [{loves: 'appearing innocent'}{loves: 'trickery'}{loves: 'lurking in rotting mansions'}{loves: 'R&B music'}]}) 
// 4. db.vampires.find({loves: 'fancy cloaks', loves: {$ne: top hats}, oves: {$ne: virgin blood}]})

/////////////////////////////////////////////////
//### Negative Selection
// 1. db.vampires.find({$and: [{loves: 'blue ribbons'}, {eye_color: {$ne: brown}}]})
// 2. db.vampires.find({location: {$ne: 'Rome'}})
// 3. db.vampires.find({$and: [{loves: {$ne: 'fancy cloaks'}}, [{loves: {$ne: 'frilly shirtsleeves'}}, [{loves: {$ne: 'appearing innocent'}}, [{loves: {$ne: 'being tragic'}}, [{loves: {$ne: 'brooding'}}]})
// 4. db.vampires.find({victims: {lte: 200}})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// 1. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df7")}, $set: {name: 'Eve'})
// 2. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df2")}, $set: {name: 'Guy Man'})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// 1. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df2")}, $set: {gender: 'f'})
// 2. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df7")}, $set: {gender: 'm'})
// 3. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df2")}, $set: {hates: 'clothes', 'jobs'})
// 4. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df2")}, $set: {name: 'moniker'})
// 5. db.vampires.update({_id: ObjectId("5b4e03d544ee150300eb9df7")}, $set: {name: 'Eve'})
// 6. db.vampires.find({gender: 'f'}.update($set: {gender: 'fems'}))

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
1.db.vampires.remove({hair_color: 'brown'})
2. db.vampires.delete({eye_color: 'blue'})
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
