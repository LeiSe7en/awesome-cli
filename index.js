const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const packageJson = require('./package.json')
// const files = require('./lib/files.js')
// const inquirer = require('./lib/inquirer')
const ConfigStore = require('configstore')
const repo = require('./lib/repo')
const github = require('./lib/github')
const commander = require('commander')
// const store = new ConfigStore(packageJson.name, {foo: 'nelson'})
// store.set('name', 'bababba')
// clear()

commander.version('1.0.0').usage('<command> [options]')
commander
	.command('create <app-name>')
	.action((name, cmd) => {
		console.log('You choose: ' + name);
	})

// 这个commander.parse实际上就是把你在命令行输入的命令，传递给commander，从而才能知道你输入的是什么命令
// 例如： 输入 node index.js create {"name": "nelson"}
// process.argv 就是： ['/usr/local/Cellar/node/9.9.0/bin/node', '/Users/caolei/Documents/Nelson/awesome-cli/index.js', 'create', '{name:nelson}']
commander.parse(process.argv)
// const context = path.resolve(cwd, projectName || '.')
// github.download(context)
// if (files.directoryExists('.git')) {
// 	console.log(chalk.red('Already a git repository!'))
// 	process.exit()
// }

// console.log(
// 	chalk.red(figlet.textSync('I am Iron man', { horizontalLayout: 'full' }))
// )

// const run = async () => {
// 	if (github.getStoredGithubToken()) {
// 	  const url = await repo.createRemoteRepo()
// 	  console.log(url)
// 	} else {
// 		github.getPersonalAccesToken()
// 	}
// }
// run()


