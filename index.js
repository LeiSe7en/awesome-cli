const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const packageJson = require('./package.json')
const files = require('./lib/files.js')
const inquirer = require('./lib/inquirer')
const ConfigStore = require('configstore')
const repo = require('./lib/repo')
const github = require('./lib/github')
const commander = require('commander')
const store = new ConfigStore(packageJson.name, {foo: 'nelson'})
clear()

if (files.directoryExists('.git')) {
	console.log(chalk.red('Already a git repository!'))
	process.exit()
}

// console.log(
// 	chalk.red(figlet.textSync('I am Iron man', { horizontalLayout: 'full' }))
// )

const getGithubToken = async () => {
	let token = github.getStoredGithubToken()
	if (token) {
		return token
	}
	token = await github.getPersonalAccesToken()
	return token
}

const run = async () => {
	const token = await getGithubToken()
	
	github.githubAuth(token)

	const url = await repo.createRemoteRepo()

	await repo.createGitignore()

	await repo.setupRepo(url)

	console.log(chalk.green('All done!'));
}
run()


