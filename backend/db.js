const mongoose = require('mongoose'); 
const mongoUrl = "mongodb+srv://roshansingh_Mdb:roshansingh_MDB_123@cluster0.ztms8bu.mongodb.net/inotebook"

const connectToMongo = () => {
  mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.message));
};

module.exports = connectToMongo;