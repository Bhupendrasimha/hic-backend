const admin = require("../config/admin")

//TO CHECK WHETHER THE USER IS AVAILABLE OR NOT IN FIREBASE

const getAuthToken = (req, res, next) => {
  //  console.log(req.headers.authorization)
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      req.authToken = req.headers.authorization.split(' ')[1];
    } else {
      req.authToken = null;
    }
    next();
  };
  
 const checkIfAuthenticated = async (req, res, next) => {
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
         console.log(authToken,"reqqq")
         const userInfo = await admin
           .auth()
           .verifyIdToken(authToken);
           console.log(userInfo,"user")
         req.authId = userInfo.uid;
         return next();
       } catch (e) {
         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
   };
   
   
module.exports =checkIfAuthenticated