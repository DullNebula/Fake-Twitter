const express = require('express');
const dotenv = require('dotenv');
const {connectDB} = require('./src/db');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./src/graphql/schema');

dotenv.config();

const app = express();
// Connecting MongoDB
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT: ${process.env.PORT}`)
});

//Middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send('Hello World of Fake Twitter')
});