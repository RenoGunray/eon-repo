
var admin = require("firebase");

//var serviceAccount = require("./node-project-246513-4399114772d4.json");

admin.initializeApp({
  serviceAccount: "./node-project-246513-4399114772d4.json",
  //credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-project-246513.firebaseio.com"
});

/*var ref = firebase.database().ref("somedata");
var newNode = ref.child('messages');

newNode.push({
  name: 'nkm',
  admin: true,
  count: 1,
  text: 'my oh my'
});*/

var db = firebase.database();
var ref = db.ref("./humans");

ref.set([
  {
    id: "0",
    name: "theodore",
    email: "theo@gmail.com",
    hobbis: "listen to Rock and Roll"
  },

  {
    id: "1",
    name: "nkhwamba",
    email: "nkm@yahoo.com",
    hobbis: "watch anime"
  }
]);




