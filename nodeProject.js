
const admin = require("firebase");

admin.initializeApp({
  serviceAccount: "./node-project-246513-4399114772d4.json",
  databaseURL: "https://node-project-246513.firebaseio.com"
});


var db = firebase.database();
var ref = db.ref("./humans");

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
  }
]);

ref.push({
  id:2,
  name: "dumb bot",
  email: "robbot$gmail.com",
  hobbis: "watch anime"
});




