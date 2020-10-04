const CLI = require('clui')
const fs = require('fs')
const git = require('simple-git/promise')()
const Spinner = CLI.Spinner

const _ = require('lodash')

const inquirer = require('./inquirer')
const gh = require('./github')

module.exports = {
	createRemoteRepo: async () => {
		const github = gh.getInstance()
		const answers = await inquirer.askRepoDetails()
		const data = {
			name: answers.name,
			description: answers.description,
			private: answers.visibility === 'private'
		}

		try {
			const res = await github.repos.createForAuthenticatedUser(data)
			console.log(res)
			return res.data
		} finally {
		}
	},
	createGitignore: async () => {
		const files = _.without(fs.readdirSync('.', '.git', '.gitignore'))
		if (files.length) {
			const answers = await inquirer.askIngnoreFiles(files)
			if (answers.ignore.length) {
				fs.writeFileSync('.gitignore', answers.ignore.join('\n'))
			} else {
				touch('.gitignore')
			}
		} else {
			touch('.gitignore')
		}
	},
	setupRepo: async (url) => {
		const status = new Spinner('Initializing local repository and pushing to remote...')
		statue.start()

		try {
			git.init()
				.then(git.add('.gitignore'))
				.then(git.add('./*'))
				.then(git.commit('Initial commit'))
				.then(git.addRemote('origin', url))
				.then(git.push('origin', 'master'))
		}
	}
}