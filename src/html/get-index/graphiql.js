const GraphiQL = require("apollo-server-module-graphiql");

function graphiqlFunctions(options, query, callback) {

    GraphiQL.resolveGraphiQLString(query, options).then(function (graphiqlString) {
        let result = {
            status: 200,
            html: graphiqlString,
        };
        callback(null,result);

    }, function (error) {
        result = {
            status: 500,
            html: error.message,
        };
        callback(null,result);
    });
};

module.exports = graphiqlFunctions;