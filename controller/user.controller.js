const { createToken, veirfyToken} = require("../middlewares/validate");

const { userservice } = require("../services");

const getuser = async (req, res) => {
    const user = await userservice.getuser();

    res.status(200).json({
        success: true,
        message: "data get successfully",
        data: user,
    });
    console.log(user);
};


const adduser = async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      const user = await userservice.adduser(body);
      res.status(201).json({
        message: "user Created success",
        data: user,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  const deleteuser = async (req, res) => {
    try {
      console.log(req.params);
      const id = req.params.id;
  
      const user = await userservice.deleteuser(id);
      if (!user) {
        throw new Error("something went wrong");
      }
  
      res.status(200).json({
        message: "user delete success",
        data: user,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  
const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    // const userExist = await userservice.getuserByFirstName(body.firstName);

    // if (userExist) {
      // throw new Error("user already existed");
    // }

    const user = await userservice.updateuser(id, body);

    res.status(200).json({
      message: "user updated success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { getuser, adduser, deleteuser, updateuser, };
