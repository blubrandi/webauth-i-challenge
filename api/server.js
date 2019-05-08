const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const session = require('express-session')

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../routes/users-route.js')

// const db = require('../data/dbConfig.js')
// const Users = require('../users/users-model.js')

const server = express()
console.log('here')

// server.use(helmet())
// server.use(cors())

// server.use(express.json())

const sessionConfig = {
    name: 'monster', //by default would be sid ** session ID **.  can be anything.
    secret: 'keep it secret, keep it safe -gandalf', // adds a layer of security.  can be any string, that's added.
    cookie: {
        httpOnly: true, // prevent access from JavaScript code
        maxAge: 1000 * 60 * 60, //in milliseconds
        secure: false, // true means only send the cookie over https
    },
    resave: false, //resave session even if it didn't change
    saveUninitialized: true, // create new sessions automatically, make sure to comply with law
}

// server.use(session(sessionConfig)) // <<<<<<

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
console.log('here')

server.get('/', (req, res) => {
    const username = req.session.username || 'stranger';
    res.send(`Hello ${username}!`);
});

module.exports = server