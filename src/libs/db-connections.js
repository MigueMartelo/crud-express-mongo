const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let db;

module.exports = function Connection() {
	if (!db) {1
		db = mongoose.connect('mongodb://localhost/crud-mongo', {
			useMongoClient: true
		});
	}
	return db;
}