var levelup = require('levelup');

exports.delWine = function(req, res) {
	console.log("delWine", req.params.id);
    var db = levelup('/tmp/dprk.db', {valueEncoding: 'json'},  function (err, db) {

    	db.del(
		    req.params.id,
		    function (err) {
		    	if (err) {
		    		res.send("E");
		    	}else {
		    		res.send(req.params.id);
		    	}
		    	db.close();
		    }
		);
    });
};
