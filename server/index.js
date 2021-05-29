const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");


// Import router
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Set up port
const PORT = process.env.PORT || 5000;

// Initialize express
const app = express();

// Apply Bodyparser Middleware
// Parse incoming request bodies in a middleware before your handlers, 
// available under the req.body property.
// https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
if (db) {
  mongoose
  .connect(db)
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err))
} else {
  console.error("MONGOOSE ERROR: Probably some problem with Mongo keys")
}

// Passport middleware
app.use(passport.initialize());

// Passport Config      
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Set static folder
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

