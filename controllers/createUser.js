
const admin=require("../config/admin")

// CREATE USER AND SEND DATA TO FIREBASE
// TODO: NEED TO MAP THE PASSWORD TO BE HASHED VALUE TO SAVE IN THE BACKEND USING JWT OR SOMEOTHER HASH

 const createUser = async (req, res) => {
const {
      email,
      password,
      firstName,
      lastName,
    } = req.body;

    const user = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    return res.send(user);
}
module.exports= createUser