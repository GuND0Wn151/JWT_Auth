const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validations");

router.post("/register", async (request, res) => {
  const validated = registerValidation(request.body);
  console.log("reigster Page")
  if (validated.error)
	return res.status(400).send(validated.error.details[0].message);

  const checkEmail = await User.findOne({ email: request.body.email });
  if (checkEmail) 
      return res.status(400).send("Email already exists");
  const checkName = await User.findOne({ email: request.body.name });
  if (checkName) 
      return res.status(400).send("Name already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    //console.log(savedUser)
    res.send({ user: savedUser.name, user: savedUser.email });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post('/login',async (request,res)=>{
	const validated = loginValidation(request.body);
	if(validated.error) return res.status(400).send(validated.error.details[0].message);
	const emailExists = await User.findOne({email:request.body.email});
	if(!emailExists) return res.status(400).send("Email does not exist");
	const validPassword = await bcrypt.compare(request.body.password,emailExists.password);
	if(!validPassword) return res.status(400).send("Invalid Password");
	

	const token = jwt.sign({_id:emailExists._id},process.env.TOKEN_SECRET);
	res.set('auth-token',token).send({token:token});
	//res.send("logged in successfully");


})

module.exports = router;
