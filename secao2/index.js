module.exports.hello =  async function(event, context) {
    console.log("Hello Word")
    return context.logStreamName
  }