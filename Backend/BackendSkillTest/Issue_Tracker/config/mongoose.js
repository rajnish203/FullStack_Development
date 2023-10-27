// connected to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://rajnishofficialforjob:ZgOgeFNMyB8mgnkb@cluster0.ijqhq6v.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;