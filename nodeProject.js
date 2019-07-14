
var admin = require("firebase-admin");

var serviceAccount = require("./node-project-246513-4399114772d4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-project-246513.firebaseio.com"
});

var ref = firebase.database().ref("somedata");
var newNode = ref.child('messages');

newNode.push({
  name: 'theo',
  admin: true,
  count: 1,
  text: 'my oh my'
});




