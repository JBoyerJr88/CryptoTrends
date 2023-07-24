var express = require('express');
var app = express();
var Datastore = require('nedb');
var db = new Datastore({ filename: '/Users/johnboyer/Crypto-TrendsV4/database.db', autoload: true});
//const React = require('react');


db.find({}, function (err, docs){

    if (err){
        console.log(err);

    } else {
        docs.array.forEach(doc => {
            const newElement = document.createElement("p");
            newElement.innerHTML = JSON.stringify(doc);
            document.body.appendChild(newElement);

        });;
    }

});

















/*
$.ajax({
    type: "GET",
    url: '/Users/johnboyer/Crypto-TrendsV4/index.js',
    dataType: 'json',
    success: function (response){
        console.log(response);
    },
    error: function (error){
        console.log(error);
    }
});
*/




        /*
        app.get('/public/', function(req, res){
            db.find({}, function (err, docs){

                console.log(docs);
            });

        });
        */

//app.use('/api', router);


//module.exports = router;