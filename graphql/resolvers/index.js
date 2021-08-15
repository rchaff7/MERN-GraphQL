const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./users');


module.exports = {
    Post: {
        likeCount: (parent) => {
            console.log(parent);
            return parent.likes.length
        },
        commentCount: (parent) => parent.commentsResolvers.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}