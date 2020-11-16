const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//IMPORT MODELS
require('./models/SchemaData');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/robert`, { useUnifiedTopology: true } );

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/robertRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.static("public"));
// Define API routes here

//mongoose.connect("mongodb+srv://hawenger:waffles@pinkwizard.nje1c.mongodb.net/robertdatabase", { useNewUrlParser: true }, { useUnifiedTopology: true });
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
