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
      options.getContent(req, "about-me", this.parallel());
      options.getBlock('tagcloud',this.parallel());
      options.getBlock(/footer.*/, this.parallel());
    },
    function done(err, about, tagcloud, footer) {
      callback(err,{about:about, tagcloud:tagcloud, blockInfo:footer});
    }
  );


};