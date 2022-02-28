#!/usr/bin/env node
import { translate } from './main'
import { Command } from 'commander'
const program = new Command()

program
  .version('0.0.2')
  .name('fy')
  .usage('<English>')
  .arguments('<English>')
  .action(function (english) {
    translate(english)
  })

program.parse(process.argv)
