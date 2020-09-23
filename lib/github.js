const CLI = require('clui')
const ConfigStore = require('configstore')
const {Octokit} = require('@octokit/rest')
const Spinner = CLI.Spinner

const { createBasicAuth } = require('@octokit/auth-basic')
const inquirer = require('./inquirer')
console.log('github', inquirer)
const pkg = require('../package.json')
const conf = new ConfigStore(pkg.name)
var ss = 2
let octokit = new Octokit()
module.exports = {
	getInstance: () => {
		return octokit
	},

	getStoredGithubToken: () => {
		return conf.get('github.token');
	},

	getPersonalAccesToken: async () => {
		// ask user for user name and password
		console.log(inquirer)
		const info = await inquirer.askGithubCredentials()
		const status = new Spinner('Authenticating for you...', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])
		status.start()
		// send user name and password to exchange the token

		const auth = createBasicAuth({
			username: info.username,
			password: info.password,
			async on2Fa () {
				// TODO
			},
			token: {
				scopes: ['user', 'public_repo', 'repo', 'repo:status'],
				note: 'ginit, the command-line tool for initalizing Git repos'
			}
		})
		try {
			const res = await auth()
			if (res.token) {
				status.stop()
				conf.set('github.token', res.token)
			} else {
				throw new Error("GitHub token was not found in the response");
			}
		} catch (err) {
			status.stop()
			console.error(err)
		}
		await auth
	}
}