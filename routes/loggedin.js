var graph = require('fbgraph');
var app = require('../app');

exports.view = function(req, res) {
   /* var foo = {};
    app.get('loggedin', function(res, req){
	graph.get("/me", function(err, res){
        foo = data;
        console.log(JSON.stringify(res, null, '\t'));
    }); */
    
 /*  app.T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, reply) {
  console.log(reply);
})*/
    
    res.render('loggedin');
    
    
    };
            
