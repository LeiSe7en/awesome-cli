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
const repoUrl = {
	miniapp: 'LeiSe7en/vue-ssr#master'
}
let octokit = new Octokit({
	auth: 'b50ef5b56cd0d26671434f0ffad8ebcf293d8f17'
})
module.exports = {
	getInstance: () => {
		return octokit
	},

	getStoredGithubToken: () => {
		return conf.get('github.token');
	},
	download: (name, targetDir, clone) => {
		const os = require('os')
		const tmpdir = path.join(os.tmpdir(), 'awesome-test-cli')
		downloadRepo(repoUrl['miniapp'], tmpdir, {clone: undefined}, (err) => {
			if (err) {
				console.log('downloadRepo error', err)
			}
			console.log(tmpdir)
		})
		return {
			tmpdir,
			targetDir
		}
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