const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
});

const buttonSchema = new Schema({
    buttonText: String,
    type: String,
    value: Boolean,
});

const userSchema = new Schema({
    userId: String,
    date: Date
});
  
  const robertSchema = new Schema({
    mood: String,
    returning: Boolean,
    talking: String,
    action: String,
    innerText: String
  
});

mongoose.model('products', productSchema);
mongoose.model("users", userSchema);
mongoose.model("moods", robertSchema);
mongoose.model("buttons", buttonSchema);
//  
//const button = new Button ({
//  buttonText: "Yes Please!",
//  type: "confirm",
//  value: true,
//});
//
//const user = new User ({
//  userId: "1234",
//  date: Date.now()
//});
//
//const mood = new Mood ({
//  mood: "helpful",
//  returning: true,
//  talking: true,
//  action: "displayProject",
//  innerText: "My creator has been making all sorts of things lately. Would you like to see a recent project?"
//
//});
// //user.save();
// //mood.save();
// //button.save();