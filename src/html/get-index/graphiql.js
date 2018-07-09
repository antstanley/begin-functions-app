const GraphiQL = require("apollo-server-module-graphiql");

function graphiqlFunctions(options, query, callback) {

    GraphiQL.resolveGraphiQLString(query, options).then(function (graphiqlString) {
        let result = {
            html: graphiqlString
        };
        callback(null,result);

    }, function (error) {
        let result = {
            status: 500,
            html: error.message
        };
        callback(null,result);
    });
};

module.exports = graphiqlFunctions;