const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.post("/", async function (req, res) {
  try {
    const user = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.render("users/login_page");
    return res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/", async function (req, res) {
  const user = await User.find().lean().exec();
  return res.send(user);
});

module.exports = router;
