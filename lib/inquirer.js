const inquirer = require('inquirer')
const files = require('./files.js')
console.log('feewewewwwziles', files)
const minimist = require('minimist')
module.exports = {
	askGithubCredentials: () => {
		// const questions = [
		// 	{
		// 		name: 'username',
		// 		message: 'Please input your user name',
		// 		type: 'input',
		// 		validate: (value) => {
		// 			if (value.length) {
		// 				return true
		// 			} else {
		// 				return 'Please enter your user name'
		// 			}
		// 		}
		// 	},{
		// 		name: 'password',
		// 		message: 'Please input your password',
		// 		type: 'input',
		// 		validate: (value) => {
		// 			if (value.length) {
		// 				return true
		// 			} else {
		// 				return 'Please enter your password'
		// 			}

		// 		}
		// 	}
		// ]
		// return inquirer.prompt(questions)
	},
	getTwoFactorAuthenticationCode: () => {

	},
	askRepoDetails: () => {
		// // 获取在使用命令行时候传入的参数，可以作为默认值 
		// const argv = require('minimist')(process.argv.slice(2))
		// const questions = [
		// 	{
		// 		type: 'input',
		// 		name: 'name',
		// 		message: 'Enter a name for the repository',
		// 		default: argv._[0] || files.getCurrentDirectoryBase(),
		// 		validate: function( value ) {
  //         if (value.length) {
  //           return true;
  //         } else {
  //           return 'Please enter a name for the repository.';
  //         }
  //       }
		// 	},
		// 	{
  //       type: 'input',
  //       name: 'description',
  //       default: argv._[1] || null,
  //       message: 'Optionally enter a description of the repository:'
  //     },
  //     {
  //       type: 'list',
  //       name: 'visibility',
  //       message: 'Public or private:',
  //       choices: [ 'public', 'private' ],
  //       default: 'public'
  //     }
		// ]
		// return inquirer.prompt(questions)
	},
	askIngnoreFiles: (fileList) => {
		// const questions = [
		// 	{
		// 		type: 'checkbox',
		// 		message: 'Select the files and/or folders you wish to ignore:',
		// 		name: 'ignore',
		// 		choices: filelist,
		// 		default: ['node_modules', 'bower_components']
		// 	}
		// ]
		// return inquirer.prompt(questions)
	}
}