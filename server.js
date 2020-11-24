const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

require('./models/SchemaData');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/robert`,  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
} );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

require('./routes/robertRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || 5000);//, () => {
//  console.log(`🌎 ==> API server now on port ${PORT}!`);
//});
