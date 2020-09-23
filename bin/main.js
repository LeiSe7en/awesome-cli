#! /usr/bin/env node
const commander = require("commander")
// minimist 是用于parse命令行代码的包 url: 'https://www.npmjs.com/package/minimist'
const minimist = require('minimist')

commander.version(require('../package').version)
				  .usage('<command> [options]')


// commander
// 	.command('create <app-name>')
// 	.description('create a new project')
// 	.action((name, cmd) => {
// 		console.log(cmd)
// 	})


