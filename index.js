const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//connection à BDD
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_PASS}@cluster0.dmyft.mongodb.net/response_counter`,
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
);

//Model
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  birthdate: Date,
  kids: Boolean,
  kidname1: String,
  kidname2: String,
  kidname3: String,
  kidname4: String,
  pets: Boolean,
  petname1: String,
  petname2: String,
  petname3: String,
  petsitter: String,
  testament: Boolean,
  bankername: String,
  email: String,
  gender: String,
  external_heir1: String,
  external_heir2: String,
  lastpost_fb: String,
  life_insurance: Boolean,
  login_fb: String,
  other_movable_heritage: String,
  other_real_estate: String,
  own_car_deed: Boolean,
  own_house_deed: Boolean,
  partnername: String,
  pass_fb: String,
  sharing_life: Boolean,
  testament_location: String,
});

const User = mongoose.model("User", UserSchema);

//Middleware


//Routes

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json("En voilà une bien belle erreur : " + err.message);
  }
});

app.all("/*", (req, res) => {
  res.status(404).json("Page introuvable");
});

//Serveur init
app.listen(5000, () =>
  console.log(`Server Opé sur localhost: ${process.env.PORT}`)
);
