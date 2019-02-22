const mongoose = require("mongoose");
const Butterfly = require("../models/Butterfly");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/back-api', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

Butterfly.create({
  name: 'Pepe',
  color: 'Math random'
})
.then(() => mongoose.disconnect())
.catch(err => console.log(err));