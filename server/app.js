const mongoose = require('mongoose')
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const { graphql } = require('graphql')
const schema = require('./schema/schema')
const app = express()
const port = 4000
const config = require('./config/config')

//alow cross-origin requests
const cors = require('cors')
app.use(cors)

//connect to db 
mongoose.connect(config)
mongoose.connection.once('open', () => { console.log('Connected to DB')})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port, () => {
    console.log(`llistening to request on ${port}`);
})