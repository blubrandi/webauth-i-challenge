const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')


const db = require('../data/dbConfig.js')
const Users = require('../users/users-model.js')

const server = express()

server.use(helmet())
server.use(cors())

server.use(express.json())

server.get('/', (req, res) => {
    res.send('We\'re up and running!')
})

module.exports = server