const mongoose = require('mongoose')
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const { graphql } = require('graphql')
const schema = require('./schema/schema')
const app = express()
const port = 7999
const config = require('./config/config')

mongoose.connect(config)
mongoose.connection.once('open', () => { console.log('Connected to DB')})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port, () => {
    console.log(`llistening to request on ${port}`);
})