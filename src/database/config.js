if (process.env.NODE_ENV == 'production') {
    module.exports = {uri: ''}
} else {
    module.exports = {uri: 'mongodb://omnistack10:OmniStack10.0@cluster0-shard-00-00-wwofx.mongodb.net:27017,cluster0-shard-00-01-wwofx.mongodb.net:27017,cluster0-shard-00-02-wwofx.mongodb.net:27017/omnistack10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'}
}