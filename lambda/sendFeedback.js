const AWS = require('aws-sdk');

var ses = new AWS.SES();

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const message = parsed.message;

  var emailParams = {
    Destination: {
      ToAddresses: ['snapjohn77@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: message
        }
      },
      Subject: {
        Data: "Email from Jiu Jitsu Memorizer"
      }
    },
    Source: "woodjohn185@gmail.com"
  };

  ses.sendEmail(emailParams, function(err) {
    if (err) {
      console.error(err, err.stack);
    }
  });

  const response = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify('Thank you, ' + 'guy' + '! ' +
      'Your feedback was received!'),
  };

  callback(null, response);
};
