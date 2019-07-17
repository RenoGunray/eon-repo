
const firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "./serviceKey.json",
  databaseURL: "https://node-project-246513.firebaseio.com"
});


var db = firebase.database();
var ref = db.ref("/humans");

ref.set([
  {
    id: 0,
    name: "theodore",
    email: "theo@gmail.com",
    hobbis: "listen to Rock and Roll"
  },

  {
    id: 1,
    name: "nkhwamba",
    email: "nkm@yahoo.com",
    hobbis: "watch anime"
  },
  
  {
    id: 2,
    name: "joseph malonga",
    email: "malonga@gmail.com",
    hobbis: "hip-hop"
  }
]);

ref.push({
  id:3,
  name: "dumb bot",
  email: "robbot$gmail.com",
  hobbis: "watch anime"
});




