const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const techniques = parsed.techniques;
  const user = parsed.user;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.put({
    TableName: 'Techs',
    Item: {
      "techniques": techniques,
      "userId": user
    }
  }).promise()
    .then((res) => {
      console.log('Updated in DynamoDB: ' + res);
    }).catch((err) => {
      console.error('Error updating: ' + err);
    });

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify('Received edit technique request.'),
  };

  callback(null, response);
};
