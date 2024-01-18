const { bookservice } = require("../services");

const getbook = async(req, res) => {
  const book = await bookservice.getbook();

    res.status(200).json({
        success: true,
        message: "data get successfully",
        data: book,
    });
    console.log(book);


};

const addbook = async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      const book = await bookservice.addbook(body);
      res.status(201).json({
        message: "book Created success",
        data: book,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  const deletebook = async (req, res) => {
    try {
      console.log(req.params);
      const id = req.params.id;
  
      const book = await bookservice.deletebook(id);
      if (!book) {
        throw new Error("something went wrong");
      }
  
      res.status(200).json({
        message: "book delete success",
        data: book,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  
const updatebook = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);
    const book = await bookservice.updatebook(id, body);

    res.status(200).json({
      message: "book updated success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { getbook, addbook, deletebook, updatebook };
