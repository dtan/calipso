/*!
 * site admin plugin module
 */
var calipso = require("lib/calipso");

/*
    host          : "smtp.sendgrid.net",
    port          : "587",
    domain        : "domain.com",
    authentication: "login",
    username      : 'username',
    password      : 'password'
    from          : "from@somewhere.com",
*/

exports = module.exports = {
  "/admin/core/config": {
    pre: function (req, res, template, block, next) {
      var preProcess = function (item, req, res, mainArg) {
        // arguments;
        var arg = mainArg,
          hasSections = calipso.utils.hasProperty('sections', arg),
          addedSection = {
            id: 'form-section-email-settings',
            label: req.t('Email Settings'),
            fields:[
              {
                label: req.t('Email Host'),
                name : 'config[emailHost]',
                type : 'text',
                value: 'Email Host Server',
                labelFirst: true
              },
              {
                label: req.t('Email Port'),
                name : 'config[emailPort]',
                type : 'text',
                value: 'Email Server Port',
                labelFirst: true
              },
              {
                label: req.t('From domain'),
                name : 'config[emailFromDomain]',
                type : 'text',
                value: 'From Domain',
                labelFirst: true
              },
              {
                label: req.t('Authentication type'),
                name : 'config[emailAuthType]',
                type : 'select',
                value: 'login',
                options: ['login'],
                labelFirst: true
              },
              {
                label: req.t('Username'),
                name : 'config[emailUsername]',
                type : 'text',
                value: 'Username',
                labelFirst: true
              },
              {
                label: req.t('Password'),
                name : 'config[emailPassword]',
                type : 'password',
                value: 'password',
                labelFirst: true
              }
            ]
          };
          
        if (hasSections) {
          arg.sections.push(addedSection);
        }
        return arg
      }
      
      next(req, res, template, block, preProcess);
    },
    post: function (req, res, template, block, next) {
      next(req, res, template, block);
    }
  }
};
