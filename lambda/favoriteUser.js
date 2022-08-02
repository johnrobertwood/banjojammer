const AWS = require("aws-sdk");

exports.handler = async (event, context, callback) => {

  const parsed = JSON.parse(event.body);
  const username = parsed.username;
  const userHistory = parsed.userHistory;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.update({
    TableName: "Users",
    Key: {"username": username},
    UpdateExpression: 'SET userHistory = :f',
    ExpressionAttributeValues: {":f": userHistory},
    ReturnValues: "UPDATED_NEW"
  }).promise()
    .then((res) => {
      console.log("Updated in DynamoDB: " + res);
    }).catch((err) => {
      console.error("Error inserting: " + err);
    });

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      "Received request to update favorites"
    ),
  };

  callback(null, response);
};
