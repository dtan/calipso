var email = require("mailer");


function randomizer(arr) {
  var len = arr.length;
  return arr[Math.floor(Math.random() * (len-1))];
}

exports = module.exports = {
  send: function () {
    //var email = require("mailer");
    var sgusername = 'username',
      sgpassword = 'password';
    email.send({
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
        template      : __dirname + "/../themes/cleanslate/email-templates/email.txt",
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
        username      : sgusername,
        password      : sgpassword
      },
      function(err, result){
        if(err){
          console.log(err);
        }
    });
    
  }
}


/*

email.send({
  host : "localhost",              // smtp server hostname
  port : "25",                     // smtp server port
  domain : "localhost",            // domain used by client to identify itself to server
  to : "wtdtan@gmail.com",
  from : "obama@whitehouse.gov",
  subject : "node_mailer test email",
  template : "sampleTemplate.txt",   // path to template name
  data : {
    "username": "Billy Bob",
    "color": function(){
      var arr = ["purple", "red", "green", "yello"];
      return arr[Math.floor(Math.random()*3)];
    },
    "animal": "monkey",
    "adjective": "quickly",
    "noun": "hot lava"
  },

  authentication : "login",        // auth login is supported; anything else is no auth
  username : "dXNlcm5hbWU=",       // Base64 encoded username
  password : "cGFzc3dvcmQ="       // Base64 encoded password
},
function(err, result){
  if(err){ console.log(err); }
});
*/