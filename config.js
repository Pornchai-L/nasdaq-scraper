var env = process.env;

module.exports = {
  port: env.PORT || 8080,
  host: env.HOST || '127.0.0.1'
};