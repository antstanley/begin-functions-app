var GraphiQL = require("apollo-server-module-graphiql");

function graphiqlFunctions(options, query, callback) {

    GraphiQL.resolveGraphiQLString(query, options).then(function (graphiqlString) {
        let result = {
            status: 200,
            isRaw: true,
            headers: {
                'Content-Type': 'text/html',
            },
            body: graphiqlString,
        };
        callback(null,result);

    }, function (error) {
        result = {
            status: 500,
            body: error.message,
        };
        callback(null,result);
    });
};

exports.respondGraphiQLHTML = graphiqlAzureFunctions;