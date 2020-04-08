const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userbaseSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  mobile: { type: Number, required: true},
  address: { type: String, required: true},
  pincode: { type: String, required: true }  
},{
    timestamps: true
});

const Userbase = mongoose.model('Userbase', userbaseSchema);

module.exports = Userbase;