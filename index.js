require('dotenv').config();

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Welcome ${process.env.PORT? process.env.PORT : "test" }`,
        input: event,
      },
      null,
      2
    ),
  };
};
