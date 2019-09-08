'use strict';
const uuid = require('uuid');

module.exports.hello = async event => {
  const processId = uuid.v1();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        processId,
      },
      null,
      2
    ),
  };
};
