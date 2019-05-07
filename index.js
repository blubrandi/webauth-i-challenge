const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('We\'re up and running!')
})

const port = process.env.PORT || 4000
server.listen(port, () => console.log(`\n *** Running on port ${port} *** \n`))
