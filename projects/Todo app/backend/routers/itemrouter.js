const express = require('express')
const itemcontroller = require('../controllers/itemcontroller')

const itemrouter = express.Router();

itemrouter.post('/todos',itemcontroller.posttodoitem)
itemrouter.get('/todos',itemcontroller.gettodoitem)
itemrouter.delete('/todos/:id',itemcontroller.deletetodoitem)
itemrouter.patch('/todos/:id',itemcontroller.updatetodoitem)

module.exports = itemrouter;