
//FIREBASE ADMIN SDK INTEGRATION

const admin =require("firebase-admin")
const serviceAccout= require("../hiccup-398c2-firebase-adminsdk-ivmnv-b3590cac2f.json")


admin.initializeApp({
  credential: admin.credential.cert(serviceAccout),
  databaseURL: 'https://hiccup-398c2.firebaseio.com'
});
module.exports= admin
