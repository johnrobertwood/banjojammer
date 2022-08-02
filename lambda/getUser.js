const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const username = parsed.username;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.get({
    TableName: 'Users',
    Key: {"username": username}
  }).promise()
    .then((res) => {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(res.Item),
      };
      callback(null, response);
    }).catch((err) => {
      console.error(err);
      callback(null, event);
    });
};
