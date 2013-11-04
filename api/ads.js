exports.post = function(request, response) {
    response.send(statusCodes.FORBIDDEN, { message : 'Posts not allowed' });
};

exports.get = function(request, response) {
    var appsTable = request.service.tables.getTable('Apps');
    
    // We only want to allow the following query parameters on the data table
    var query = {};
    if (request.query.city) 
        query.city = request.query.city;
    if (request.query.state) 
        query.state = request.query.state;
    if (request.query.countryCode) 
        query.countryCode = request.query.countryCode;
    if (request.query.creditRegion) 
        query.creditRegion = request.query.creditRegion;
    if (request.query.platform) 
        query.platform = request.query.platform;
        
    appsTable.where(query).read({success: function (results) {
        console.log(results);
        response.send(statusCodes.OK, results);
    }})
};