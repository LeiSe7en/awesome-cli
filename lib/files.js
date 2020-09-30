const path = require('path')
const fs = require('fs')
// const github = require('./github')
module.exports = {
	getCurrentDirectoryBase: function () {
		return path.basename(process.cwd())
	},
	directoryExists: (filePath) => {
		return fs.existsSync(filePath)
	}
}