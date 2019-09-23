

const mongoose = require('mongoose');

const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const bodyParser = require('body-parser');
const passport = require('passport');


// app.get('/', (req,res) => res.send('Hello'));
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use('/api/users', users);
app.use('/api/tweets', tweets);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.user(passport.initialize());
require('./config/passport')(passport);


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDb successfully'))
    .catch(err => console.log(err));