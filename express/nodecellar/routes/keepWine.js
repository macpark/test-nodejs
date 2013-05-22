var levelup = require('levelup');

exports.keepWine = function(req, res) {
	console.log("keepWine", req.params.id, ":", req.params.value);
    var db = levelup('/tmp/dprk.db', {valueEncoding: 'json'},  function (err, db) {

    	db.put(
		    req.params.id, 
		    req.params.value,
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
