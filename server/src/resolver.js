const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (parent, args, contextValue, info) => {
            const { dataSources } = contextValue;
            return dataSources.trackAPI.getTracksForHome();
        }   
    },
    Track: {
        author: (parent, args, contextValue, info) => {
            const { dataSources } = contextValue;
            const {authorId} = parent;
            return dataSources.trackAPI.getAuthor(authorId);   
        }
    }
};

module.exports = resolvers;