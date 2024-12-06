const express = require('express')
const itemcontroller = require('../controllers/itemcontroller')

const itemrouter = express.Router();

itemrouter.post('/todos',itemcontroller.posttodoitem)
itemrouter.get('/todos',itemcontroller.gettodoitem)
itemrouter.delete('/todos/:id',itemcontroller.deletetodoitem)

module.exports = itemrouter;