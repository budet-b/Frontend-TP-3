const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    category: { type: GraphQLString },
    title: { type: GraphQLString },
    year: { type: GraphQLString },
    picture: { type: GraphQLString },
  }),
});

module.exports = MovieType;
