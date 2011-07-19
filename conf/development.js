
/**
 * DEVELOPMENT Environment settings
 */
module.exports = function(app,express) {

  // Database connection
  app.set('db-uri', 'mongodb://localhost/wtd-dev');

  // Change to suit - this key works for calip.so
  app.set('google-analytics-key', 'UA-17607570-#');

  // Disqus
  app.set('disqus-shortname', 'wtd-depot');

  // App config
  app.set('server-url', 'http://localhost:3200');

  // Language mode
  app.set('language-add', true);
  

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

}
