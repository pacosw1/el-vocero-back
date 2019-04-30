let db = require("../db/db-connect");

exports.getMessagesBetweenTwo = async (req, res) => {
  let { receiver, sender } = req.body;
  let messages = await db.Message.find({
    senderId: sender,
    receiverId: receiver
  });
  if (items.length < 1)
    res.status(404).send("No messages found between these users");
  else res.status(200).send(items);
};

exports.createMessage = async (req, res) => {
  let newMessage = new db.Message(req.body);
  await newMessage.save();
  res.send({ message: "Message sent sucessfully", text: newMessage });
};

// exports.editAd = async (req, res) => {
//   await db.Ad.find({ _id: req.params._id }, (err, result) => {
//     if (result.length < 1) res.status(404).send("does not exist ");
//   });
//   await db.Ad.findByIdAndUpdate({ _id: req.params._id }, req.body);
//   res.status(200).send(`Item with id: ${req.params._id} updated successfully`);
// };