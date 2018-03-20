import LambdaEnvVars from 'lambda-env-vars';

const lambdaEnvVars = new LambdaEnvVars();

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success',
      testLambdaVariable: lambdaEnvVars.getDefaultDecryptedValue('testLambdaVariable')
    }),
  };

  callback(null, response);
};