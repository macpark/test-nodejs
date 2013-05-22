var levelup = require('levelup');

exports.findAll = function(req, res) {
    //res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
    var returnVal = [];
    var db = levelup('/tmp/dprk.db', {valueEncoding: 'json'},  function (err, db) {

    	db.createReadStream({
		    limit: 20,
		    reverse: true
		})
		.on('data', function (data) {
		    returnVal = returnVal.concat(data);
		    //console.log(data);
		    //console.log(returnVal);
		})
		.on('error', function (err) {
		    console.log('Oh my!', err);
		})
		.on('close', function () {
			res.send(returnVal);
		    db.close();
		});
    });

    
};
 
exports.findById = function(req, res) {
    //res.send({id:req.params.id, name: "The Name", description: "description"});
    var db = levelup('/tmp/dprk.db', {valueEncoding: 'json'},  function (err, db) {
    	
    	db.get(req.params.id, function (err, value) {
			res.send(value);
			console.log(req.params.id, ':', value);
		});

    	db.createReadStream({
		    limit: 20,
		    reverse: true
		})
		.on('data', function (data) {
		    //returnVal = returnVal.concat(data);
		    console.log(data);
		    //console.log(returnVal);
		})
		.on('error', function (err) {
		    console.log('Oh my!', err);
		})
		.on('close', function () {
			
		    db.close();
		});
    });
};