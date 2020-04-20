// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    const color = subject === 'World' ? 'green' : 'blueviolet'
    console.log('EVENT:',event)
    console.log('CONTEXT',context)
    return {
      statusCode: 200,
      body: `<h1 style="color: red; background-color: ${color};">Hello ${subject}</h1>`
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
