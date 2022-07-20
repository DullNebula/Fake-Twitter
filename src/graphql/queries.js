const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType } = require('./types')
const {User} = require('../models')

//All users query
const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in database',
    resolve(parent, args){
        return User.find()
    }
}
//Single user query
const user = {
    type: UserType,
    description: 'Query user by ID',
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent,args){
        return User.findById(args.id)
    }
}
//post all query
const posts = {
    type: new GraphQLList(Post),
    description: 'Query all posts',
    resolve(parent, args){
        return Post.find()
    }
}
//post id query
const postById = {
    type: new Post,
    description: 'Query posts by ID',
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent,args){
        return Post.findById(args.id)
    }
}

const postBySlug = {
    type: PostType,
    description: 'Query post by slug value',
    args: {
        slug: {type: GraphQLString}
    },
    async resolve(parent, args){
        return Quiz.findOne({slug: args.slug})
    }
}
module.exports = {users, user, posts, postById, postBySlug}