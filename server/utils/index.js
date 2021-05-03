const mongoose = require('mongoose')
module.exports = {
	checkMongoId: id => mongoose.Types.ObjectId.isValid(id)
}
