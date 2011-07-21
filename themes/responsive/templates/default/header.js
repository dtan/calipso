/**
 * Additional content section / block functions for body.
 */

var calipso = require("../../../../lib/calipso");

exports = module.exports = function(req, options, callback) {

  /**
   *  Get additional content for blocks in the template
   */
  calipso.lib.step(
    function getContent() {
      options.getContent(req,'site.name',this.parallel());
    },
    function done(err,siteName) {
      console.log('siteName: ', siteName)
      callback(err,{siteName:siteName});
    }
  );


};
