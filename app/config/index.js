const config = {
    app: {
    port: process.env.port || 3000,
    db: {
        uri: process.env.mongodb_uri || "mongodb://127.0.0.1:27017/contactbook"
        }    
}
    
    };

module.exports = config;