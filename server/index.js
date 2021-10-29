const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const connectToDB = require('./db/conn');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const app = express();
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello World' },
    }),
  }),
});

require('dotenv').config();
connectToDB();

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
