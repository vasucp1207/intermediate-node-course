const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://vasucp1207:cpcppdsa@cluster0.4cwwkh6.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

var _db;

module.exports = {
	connectToServer: client.connect(function(err, db){
			if(db){
				_db = db.db('exployees');
				// console.log(_db);
				console.log('successfully connected to MongoDB.');
			}
			else if(err){
				console.error(err);
			}
		})
	,

	getDb: function(){
		return _db;
	},
};
