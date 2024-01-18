const { orderservice } = require("../services");

const getorder = async(req, res) => {
  const order = await orderservice.getorder();

    res.status(200).json({
        success: true,
        message: "data get successfully",
        data: order,
    });
    console.log(order);


};

const addorder = async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      const order = await orderservice.addorder(body);
      res.status(201).json({
        message: "order Created success",
        data: order,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  const deleteorder = async (req, res) => {
    try {
      console.log(req.params);
      const id = req.params.id;
  
      const order = await orderservice.deleteorder(id);
      if (!order) {
        throw new Error("something went wrong");
      }
  
      res.status(200).json({
        message: "order delete success",
        data: order,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  
const updateorder = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);
    const order = await orderservice.updateorder(id, body);

    res.status(200).json({
      message: "order updated success",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { getorder, addorder, deleteorder, updateorder };
