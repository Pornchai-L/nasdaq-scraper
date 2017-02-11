var env = process.env;

module.exports = {
  mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 8080,
  host: env.HOST || '127.0.0.1',
  serverUrl : function() {
    return 'http://'+ this.host +':'+ this.port;
  }
};