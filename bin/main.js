#! /usr/bin/env node
const commander = require("commander")
// minimist 是用于parse命令行代码的包 url: 'https://www.npmjs.com/package/minimist'
const minimist = require('minimist')
const {cleanArgs} = require('../lib/utils')
commander
	.command('create <app-name>')
	.description('This is the cli for uniapp Tencent mini-program')
	.option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .option('-d, --default', 'Skip prompts and use default preset')
	.action((name, cmd) => {
		console.log(cmd)
	})


commander.parse(process.argv)
