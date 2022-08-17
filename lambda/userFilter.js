const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const module = parsed.moduleName;
  const techName = parsed.techName;
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.get({
    TableName: 'Techs',
    Key: {
      "userId": module
    }
  }).promise()
    .then((res) => {
      let technique = res.Item.techniques;
      technique = technique[
        Object.keys(technique).filter(
          (t) => technique[t].name === techName
        )[0]
      ];

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(technique),
      };
      callback(null, response);
    }).catch((err) => {
      console.error(err);
      callback(null, event);
    });
};
