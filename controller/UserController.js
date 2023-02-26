import User from "../models/User.js";
import bcrypt from "bcrypt";

const UserController = {
  //LOGIN
  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("Wrong username !");
      }
      const validPassword = bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(404).json("Wrong password !");
      }
      if (user && validPassword) {
        return res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //REGISTER
  regiser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        password: hashed,
        fullName: req.body.fullName,
      });
      res.status(200).json(await newUser.save());
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
export default UserController;
