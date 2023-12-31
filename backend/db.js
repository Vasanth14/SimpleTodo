const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@week3db.5qyzzct.mongodb.net/todo')

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo
}