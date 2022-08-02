const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const techniqueName = parsed.technique.name;
  const technique = parsed.technique;
  const ddb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'Techs',
    Key: {"userId": 'randy-tech'},
    UpdateExpression: 'SET techniques.#techniqueName = :t',
    ExpressionAttributeNames: {
      '#techniqueName': techniqueName,
    },
    ExpressionAttributeValues: {
      ':t': technique
    }
  };

  ddb.update(params).promise()
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
    body: JSON.stringify('Received edit technique request'),
  };

  callback(null, response);
};
