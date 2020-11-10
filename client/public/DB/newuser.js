const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hawenger:waffles@pinkwizard.nje1c.mongodb.net/robertdatabase", { useNewUrlParser: true }, { useUnifiedTopology: true });

const buttonSchema = new mongoose.Schema ({
    buttonText: String,
    type: String,
    value: Boolean,
  });
  
  const userSchema = new mongoose.Schema ({
    userId: String,
    date: Date
  });
  
  const robertSchema = new mongoose.Schema ({
    mood: String,
    returning: Boolean,
    talking: String,
    action: String,
    innerText: String
  
  });
  const User = mongoose.model("User", userSchema);
  const Mood = mongoose.model("Mood", robertSchema);
  const Button = mongoose.model("Button", buttonSchema);
  
  const button = new Button ({
    buttonText: "Yes Please!",
    type: "confirm",
    value: true,
  });
  
  const user = new User ({
    userId: "1234",
    date: Date.now()
  });
  
  const mood = new Mood ({
    mood: "helpful",
    returning: true,
    talking: true,
    action: "displayProject",
    innerText: "My creator has been making all sorts of things lately. Would you like to see a recent project?"
  
  });
//  user.save();
//  mood.save();
//  button.save();