var email   = require("mailer"),
  utils     = require('connect').utils,
  merge     = utils.merge,
  templates = {
    "hello": __dirname + "/../emails/templates/email.txt"
  },
  defaults = {
    // host : "localhost",              // smtp server hostname
    // port : "25",                     // smtp server port
    // domain : "localhost",            // domain used by client to identify itself to server
    host          : "smtp.sendgrid.net",
    port          : "587",
    domain        : "domain.com",
    to            : "to@somewhere.com",
    from          : "from@somewhere.com",
    subject       : "Node mailer test template email",
    // template needs to be relative to this file
    template      : templates.hello,
    data          : {
      "username": "Yoho",
      "color": function () {
        var arr = ['purple', 'red', 'green', 'yellow'];
        return randomizer(arr); //arr[Math.floor(Math.random()*3)];
      },
      "animal": function () {
        var arr = ['monkey', 'cat', 'dog', 'rat'];
        return randomizer(arr);
      },
      "adverb": function () {
        var arr = ['easily', 'lazily', 'drunkenly', 'haphazardly'];
        return randomizer(arr);
      },
      "noun": function () {
        var arr = ['mound', 'house', 'car', 'lake'];
        return randomizer(arr);
      }
    },
    authentication: "login",
    username      : 'username',
    password      : 'password'
  };

function randomizer(arr) {
  var len = arr.length;
  return arr[Math.floor(Math.random() * (len-1))];
}

exports = module.exports = {
  send: function (options) {
    options = utils.merge(defaults, options);
    email.send(
      options,
      function(err, result){
        if(err){
          console.log(err);
        }
    });
    
  }
}
