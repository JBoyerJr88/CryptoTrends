const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = express.Router();
const Datastore = require('nedb');
const fs = require('fs');
var http = require('http');
var mime = require('mime');

//Sets server to port 3300
const PORT = process.env.PORT || 3300;
const app = express();
const request = require('request');
const path = require('path');

//Creates database
const database = new Datastore('database.db');
database.loadDatabase();

//Test of MIME Type
var filepath = 'script.js';
var mimeType = mime.getType(path.extname(filepath));
console.log(mimeType);


//GET request from external API
const options = {
  method: 'GET',
  url: 'https://finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com/get-social-trending/posts',
  qs: {social: 'twitter', isCrypto: 'true', timestamp: '24h', limit: '10'},
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'API_KEY_VALUE',
    'X-RapidAPI-Host': 'finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
    const timestamp = Date.now();
    body.timestamp = timestamp;
    database.insert(body);
    response = body;
    //response.json(body);

});

//Get request to pull api data from server
app.get('/api', function (request, response) {
    database.find({}, (err, data) => {
      response.json(data);

    });

});    




//Get request to have server serve the database
app.get('/data', function(req, res, next){
    fs.readFile('/Users/johnboyer/Crypto-TrendsV4/database.db', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data);

    });

});



//Get request to have the server server the main html file
app.get('/', function(req, res, next){
    fs.readFile('/Users/johnboyer/Crypto-TrendsV4/public/index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);

    });
    

});
   

//Serves up the public folder
app.use(express.static('public'));  



//Assigns MIME type for the public javascript file
app.get('/script.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
      
      res.sendFile(__dirname, + 'script.js');
  });

  //Get request for the server to server the public javascript file
  app.get('/', function(req, res, next){
    fs.readFile('/Users/johnboyer/Crypto-TrendsV4/public/script.js', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);

    });
    

});




//Enables cors
app.use(cors());

//Tells server to listen to the assigned port and print that the server is running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = router;

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85GY56jpBj4iTSyNIndVahC-pgmuUkKE",
  authDomain: "crypto-trendsv4.firebaseapp.com",
  projectId: "crypto-trendsv4",
  storageBucket: "crypto-trendsv4.appspot.com",
  messagingSenderId: "192209057735",
  appId: "1:192209057735:web:2faeeebcdf1e13afb5cbe2",
  measurementId: "G-LX9Y9SZHP7"
};

// Initialize Firebase
//const apps = initializeApp(firebaseConfig);
//const analytics = getAnalytics(apps);