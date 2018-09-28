var middleware = {
    
        requiredAuthentication: function(req , res , next) {
    
            console.log('private authentication');
            next();
        },
        logger: function(req , res , next) {
    
            console.log('Logger' + req.method+ ' ' + req + ' ' + new Date());
            next();
        }
    
    };

    module.exports = middleware;