import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    //const imagePath = req.file ? req.file.path : null;
    const imagePath = req.file ? req.file.buffer.toString("base64") : null;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists!" });
    }
    const userAdded = await User.create({
      ...req.body,
      image: imagePath,
    });
    res.status(201).json({ message: "User create successfully", userAdded });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
