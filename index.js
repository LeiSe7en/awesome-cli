const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const packageJson = require('./package.json')
// const files = require('./lib/files.js')
// const inquirer = require('./lib/inquirer')
const ConfigStore = require('configstore')
const repo = require('./lib/repo')
const github = require('./lib/github')
const store = new ConfigStore(packageJson.name, {foo: 'nelson'})
store.set('name', 'bababba')
clear()

// if (files.directoryExists('.git')) {
// 	console.log(chalk.red('Already a git repository!'))
// 	process.exit()
// }

// console.log(
// 	chalk.red(figlet.textSync('I am Iron man', { horizontalLayout: 'full' }))
// )

const run = async () => {
	// await github.getPersonalAccesToken()
	// if (github.getStoredGithubToken()) {
	//   const url = await repo.createRemoteRepo()
	//   console.log(url)
	// } else {
	// 	github.getPersonalAccesToken()
	// }
}
run()


