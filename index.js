// const express = require('express') 
console.log('here')
const server = require('./api/server.js')


const port = process.env.PORT || 4000
server.listen(port, () => console.log(`\n *** Running on port ${port} *** \n`))
