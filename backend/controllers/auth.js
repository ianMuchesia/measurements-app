const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const User = require("../models/User");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    throw new BadRequestError("please provide all the values");
  }
  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new BadRequestError("email is already in use");
  }

  const role = "user";

  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ success: true, user: tokenUser });


};

const login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        throw new BadRequestError("Please provide email and password")
    }

    const user = await User.findOne({ email });

    if (!user) {
       throw new NotFoundError("No account available with the given email")
      }

      const isPasswordCorrect = await user.comparePassword(password);


      if (!isPasswordCorrect) {
       throw new BadRequestError("Your email and password so not match")
      }

      const tokenUser = createTokenUser(user);

      attachCookiesToResponse({ res, user: tokenUser });

      res.status(StatusCodes.CREATED).json({ success: true, user: tokenUser });
};



const logoutUser = async(req, res)=>{
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000), //expiresin one second
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
}
module.exports = {
  login,
  register,
  logoutUser
};
