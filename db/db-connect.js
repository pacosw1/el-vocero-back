var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost/el-vocero",
  {
    useNewUrlParser: true
  },
  () => console.log("connected to mongodb")
);

mongoose.Promise = Promise;

module.exports.User = require("./models/user");
// module.exports.Category = require("./category");
module.exports.Product = require("./models/products");
module.exports.Image = require("./models/images");
