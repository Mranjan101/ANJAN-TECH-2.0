  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝐀𝐧𝐣𝐚𝐧-𝐓𝐞𝐜𝐡-𝟐.𝟎"},
    creator: { type: String, default: "𝐀𝐧𝐣𝐚𝐧" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
