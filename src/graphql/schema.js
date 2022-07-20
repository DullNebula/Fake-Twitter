const {GraphQLSchema, GraphQLObjectType} = require('graphql');
const queries = require('./queries');
// mutations will arrive here later


const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Queries',
    fields: queries
})

module.exports = new GraphQLSchema({query: QueryType})