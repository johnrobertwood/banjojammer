const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const technique = parsed.technique;
  const user = parsed.user;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.update({
    TableName: 'Techs',
    Key: {
      "userId": user
    },
    UpdateExpression: "set techniques.#technique = :t",
    ExpressionAttributeNames: {
      "#technique": technique.name
    },
    ExpressionAttributeValues: {
      ":t": technique
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
