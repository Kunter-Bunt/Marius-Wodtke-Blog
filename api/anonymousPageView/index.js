module.exports = async function (context, req) {
    const page = (req.query.page || (req.body && req.body.page));
    context.log(`Anonymous Page View: ${page}`);
    const responseMessage = `Thank you for visiting ${page}`

    context.res = {
        status: 200,
        body: responseMessage
    };
}