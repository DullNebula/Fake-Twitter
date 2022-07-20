const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { User } = require('../models');


const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
    })
})
const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post Type',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        correctAnswer: {type: GraphQLString},
        userID: {type: GraphQLString},
        order: {type: GraphQLInt},
        user:{
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.userID)
            }
        }
    })
})
module.exports = { UserType, PostType }