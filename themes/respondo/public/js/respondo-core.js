// i don't feel like abstracting anything right now

var Respondo = {};


$(function () {
  
  Respondo.inits = {

    languages: function () {
      var isClosing = false;
      function closeLangs(cb) {
        isClosing = true;
        $('.language-wrap pre').each(function (i, a) {
          var $a = $(a);
          $a.animate({ height: 0 }, 'fast', 'easeOutQuad', function () {
            $a.hide();
            isClosing = false;
            cb();
          });
        });
      }
  
      $('.language-wrap h3').each(function (i, a) { 
        var $a = $(a);
        $a.click(function () {
          if (!isClosing) {
            closeLangs(function () {
              $a.siblings('pre').show().animate({ height: "100%" }, 'fast', 'easeOutQuad', function () {

              })
            });
          }
        });
      });
    },
    content: function () {
      $('#delete-menu-item a').click(function (e) {
        if (!confirm('Are you sure you want to delete item?')) {
          return false;
        }
      })
    }
  }
  
  
  for (var fn in Respondo.inits) {
    Respondo.inits[fn]();
  }
  
});