const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'RoshanSingIsGreate';

// ROUTE 1 :  Create User using : POST "/api/auth/createuser".  Dosn't require auth
router.post('/createuser', [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
], async (req, res) => {
  let success = false;

  // if there errors , return bad request and erros
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

  // check whether the use with this email exist or not

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({success, error: "Email already exists" });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // create new user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user:{
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // res.json(user);
    success = true;
    res.json({success, authtoken});
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
}
);

// ROUTE 2 : Create User using : POST "/api/auth/login".  No login reqiure

router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      success = false
      return res.status(400).json({error: "Pleas try login with correct credential"});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      success = false
      return res.status(400).json({error: "Pleas try login with correct credential"});
    }

    const data = {
      user:{
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true
    res.json({success, authtoken});

  }catch (error) {
    res.status(500).send("Some error occured");
  }


});

// ROUTE 3 : Get logggedin User Details using: POST "/api/auth/getuser". login reqiured
router.post("/getuser", fetchuser, async (req, res)=>{
try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.send(user);

}catch (error) {
    res.status(500).send("Some error occured");
  }
});


module.exports = router 


 