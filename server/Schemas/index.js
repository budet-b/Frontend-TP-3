const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } =
  graphql;
const moviesData = require('../movies.json');

const MovieType = require('./TypeDefs/MovieType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllMovies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        console.log('Will send all movies');
        return moviesData;
      },
    },
    getMovie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        if (!args.id) return null;

        const { id } = args;
        const movie = moviesData.find((item) => item.id === id);
        console.log('Will send a movie');
        return movie ?? null;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMovie: {
      type: MovieType,
      args: {
        category: { type: GraphQLString },
        title: { type: GraphQLString },
        year: { type: graphql.GraphQLInt },
      },
      resolve(parent, args) {
        console.log('creating... ', args);
        if (!args) return null;
        const { category, title, year } = args;
        if (!category || !title || !year) return null;

        const input = {
          id: `${moviesData.length + 1}`,
          category,
          title,
          year,
          picture: 'http://dummyimage.com/200x400.png/cc0000/ffffff',
        };
        moviesData.push(input);
        return input;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
