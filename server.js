var express = require('express');

var app = express();

var middleware = require('./middleware');

// var middleware = {

//     requiredAuthentication: function(req , res , next) {

//         console.log('private authentication');
//         next();
//     },
//     logger: function(req , res , next) {

//         console.log('Logger' + req.method+ ' ' + req + ' ' + new Date());
//         next();
//     }

// };


//apply on all routes
app.use(middleware.logger);


// app.get('/about',function(req ,res){
    
//     res.send('About us!');
    
//  });


//apply this filter on specific route
app.get('/about',middleware.requiredAuthentication,function(req , res){

res.send('About us!');

});

app.use(express.static(__dirname + '/public'));

app.listen(3000,function(){
    console.log('Express server has been started');
});
