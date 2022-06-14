
//FIREBASE ADMIN SDK INTEGRATION

const admin =require("firebase-admin")
const serviceAccout= require("../hiccup-admin.json")


admin.initializeApp({
  credential: admin.credential.cert(serviceAccout),
  databaseURL:process.env.firebaseURL 
});
module.exports= admin
