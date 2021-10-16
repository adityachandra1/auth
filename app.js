require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/greeks', (req, res) => res.render('greeks'));
app.use(authRoutes);