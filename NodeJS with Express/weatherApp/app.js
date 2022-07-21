// jshint esversion:6

// npm i express body-parser nodemon

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


//--- The app gets an HTTPS request (aka req1) and sends a response (aka res1)
app.get("/",function(req1, res1){
    res1.sendFile(__dirname + "/index.html");
})

app.post("/",function(req1, res1){
    var city = req1.body.cityName
    var units = "metric";
    var api = "8a6835686c0ac9f76b1559ca35edbfd2";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api+"&units="+units;
    
    //--- using the https module to get data from a third-party API
    https.get(url, function(res2){
        res2.on("data",function(data){
            var fullWeatherData = JSON.parse(data);
            var currentTemp = fullWeatherData.main.temp;
            var weatherDescription = fullWeatherData.weather[0].description;
            var icon = fullWeatherData.weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res1.write("<h1>The temperature in "+city+" is "+currentTemp+" degrees celsius.</h1>");
            res1.write("<h2>The weather status is "+weatherDescription+"</h2>")
            res1.write("<img style='background-color: #999;' src="+iconURL+"></img>");
            res1.send();
        })
    })
})









app.listen(3000, function(){
    console.log("Server is running on port 3000");
})