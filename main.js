
const firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "./serviceKey.json",
  databaseURL: "https://node-project-246513.firebaseio.com"
});

//inserting data for the member form
const addMemberBtn = document.getElementById('add-member-btn');
const insertName = document.getElementById('name').value;
const insertEmail = document.getElementById('email').value;
const insertPhone = document.getElementById('phone').value;



var db = firebase.database();
var ref = db.ref("/humans");

addMemberBtn.addEventListener('click', function(){
  ref = db.ref('/humans' + insertName);
  ref.push({
    email: insertEmail,
    phone: insertPhone 
  });
});

//inserting data for corporate body form

const addCorporateBtn = document.getElementById('add-corporate-btn');
const insertCorpName = document.getElementById('corp-name').value;
const insertCorpEmail = document.getElementById('corp-email').value;
const insertCorpContact = document.getElementById('corp-contact').value;



var db = firebase.database();
var ref = db.ref("/humans");

addCorporateBtn.addEventListener('click', function(){
  ref = db.ref('/humans' + insertCorpName);
  ref.push({
    email: insertCorpEmail,
    phone: insertCorpContact
  });
});

//

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




