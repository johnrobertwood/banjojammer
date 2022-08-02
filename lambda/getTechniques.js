const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  const parsed = JSON.parse(event.body);
  const module = parsed.moduleName
  const ddb = new AWS.DynamoDB.DocumentClient();

  ddb.get({
    TableName: 'Techs',
    Key: {
      "userId": module
    }
  }).promise()
    .then((res) => {
      console.log("Get from DynamoDB: " + res);
      var obj = res.Item.techniques;
      var arr = [];
      for (const key in obj) {
        if (obj[key]) {
          arr.push(obj[key]);
        }
      }
      arr.sort((a, b) => a.id - b.id);

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(arr),
      };
      callback(null, response);
    }).catch((err) => {
      console.error(err);
      callback(null, event);
    });
};
