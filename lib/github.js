const CLI = require('clui')
const ConfigStore = require('configstore')
const {Octokit} = require('@octokit/rest')
const Spinner = CLI.Spinner
const downloadRepo = require('download-git-repo')
const { createBasicAuth } = require('@octokit/auth-basic')
const inquirer = require('./inquirer')
const pkg = require('../package.json')
const path = require('path')
const conf = new ConfigStore(pkg.name)

let octokit = 
module.exports = {
	getInstance: () => {
		return octokit
	},
	githubAuth: (token) => {
		return new Octokit({
			auth: token
		})
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
				// 如果github账号开启了二次验证，就需要这个回调函数
			},
			token: {
				scopes: ['repo', 'repo:status']
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