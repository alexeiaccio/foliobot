// mongo db
const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {useMongoClient: true}, (err, res) => {
    if (err) {
        console.log('ERROR connecting to: ' + uri + '. ' + err)
    } else {
        console.log('Succeeded connected to: ' + uri)
    }
})

mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
  user: {
      id: { 
        type: Number, 
        unique: true, 
        required: true, 
        dropDups: true },
      token: String
  },
  timestamp: String
})

const User = mongoose.model('Users', userSchema)

const db = {
  getUser(id, cb) {
    User.findOne({'user.id': parseInt(id)}).exec((err, result) => {
      cb(result)
    })
  },
  addUser(user, cb) {
    dbusr = new User({
      user: user,
      timestamp: new Date().toISOString()
    }).save(err => err ? console.log(err.message) : cb)
  }
}

module.exports = db