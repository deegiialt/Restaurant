// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Reservations (DATA)
// =============================================================
var reservations = [
  {
    
    name: "Mason",
    email: "masonamaya@yahoo.com ",
    phoneNumber: "30498902384",
    uniqueID: "Mason",
  },
  {
    name: "Alex",
    email: "alex@yahoo.com",
    phoneNumber: "0932852352",
    uniqueID: "Alex"
  },
  { 
    name: "Max",
    email: "Maxwell@gmail.com",
    phoneNumber:"2433465342",
    uniqueID: "Maxwell"
  },
  {  
    name: "Deegii",
    email: "Deegii@gmail.com",
    phoneNumber:"3038675309" ,
    uniqueID: "Deegii"
  },
  {
    
    name: "Sarah",
    email: "Sarah@gmail.com",
    phoneNumber:"6718920789",
    uniqueID: "Sarah"
  },
  {
    
    name: "Eric",
    email: "Eric@gmail.com",
    phoneNumber:9373461592 ,
    uniqueID: "Eric"
  },
  {
    
    name: "Charlie",
    email: "Charlie@gmail.com",
    phoneNumber:3033402952 ,
    uniqueID: "Charlie"
  },
  ];

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// APIs - provides JSON
// ============================================================
app.get("/api/tables", function(req, res) {
    var firstFive= [];
    for (var i = 0; i < 5; i++) {
      firstFive.push(reservations[i].uniqueID) 
    }
    return res.json(firstFive);
});

app.get("/api/waitlist", function(req, res) {
    var waitingList= []
    for (var i = 5; i < reservations.length; i++) {
      waitingList.push(reservations[i].uniqueID)   
    }
    return res.json(waitingList);
});

app.get("/api/all", function(req, res) {
    var all= []
    for (var i = 0; i < reservations.length; i++) {
      all.push(reservations[i])   
    }
    return res.json(all);
});

app.get("/api/waitlistobj", function(req, res) {
    var waitingListObj= []
    for (var i = 5; i < reservations.length; i++) {
      waitingListObj.push(reservations[i])   
    }
    return res.json(waitingListObj);
});

// Takes In JSON 
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});