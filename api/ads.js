exports.post = function(request, response) {
    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    var appsTable = request.service.tables.getTable('Apps');
    
    appsTable.where(request.query).read({success: function (results) {
        console.log(results);
        response.send(statusCodes.OK, results);
    }})
};