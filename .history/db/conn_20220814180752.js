const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://emperror:cpcppdsa@cluster0.zclhnt7.mongodb.net/Intermediate?retryWrites=true&w=majority'
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
