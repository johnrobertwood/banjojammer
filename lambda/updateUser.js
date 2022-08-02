const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const username = parsed.currentUser.username;
  const techniqueName = parsed.technique.name;
  const quizType = parsed.quizType;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.update({
    TableName: "Users",
    Key: {
      "username": username
    },
    UpdateExpression: 'SET userHistory.#quizType.#techniqueName = :t',
    ExpressionAttributeNames: {
      "#techniqueName": techniqueName,
      "#quizType": quizType
    },
    ExpressionAttributeValues: {
      ":t": true
    },
    ReturnValues: "UPDATED_NEW"
  }).promise()
    .then((res) => {
      console.log("Updated in DynamoDB: " + res);
    }).catch((err) => {
      console.error("Error updating: " + err);
    });

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      "Received request to update user"
    ),
  };

  callback(null, response);
};
