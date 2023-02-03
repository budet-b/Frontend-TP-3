const express = require('express');
const app = express();
const GRAPHQL_PORT = 8000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/index');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(GRAPHQL_PORT, () => {
  console.log('Server running');
});
