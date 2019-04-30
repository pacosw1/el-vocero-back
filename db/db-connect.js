var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.vocero_db,
  {
    useNewUrlParser: true
  },
  () => console.log("connected to mongodb")
);

mongoose.Promise = Promise;

module.exports.User = require("./models/user");
module.exports.Category = require("./models/category");
module.exports.Ad = require("./models/ad");
module.exports.Image = require("./models/image");
module.exports.Favorite = require("./models/favorite");
module.exports.Location = require("./models/location");
module.exports.Message = require("./models/message");
