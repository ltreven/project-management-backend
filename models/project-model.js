const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  title: String,
  description: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Project', schema)
