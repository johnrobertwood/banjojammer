const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const userId = parsed.userId;
  const username = parsed.username;
  const userHistory = parsed.userHistory;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.put({
    TableName: 'Users',
    Item: {
      "username": username,
      "userId": userId,
      "userHistory": userHistory
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
    body: JSON.stringify('Received add user request'),
  };

  callback(null, response);
};
