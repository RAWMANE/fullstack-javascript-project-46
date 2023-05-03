#!/usr/bin/end node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const programm = new Command();

programm
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, programm.opts().format));
  })
  .helpOption('-h, --help ', 'output usage information')
  .option('-f, --format <type>', 'output format');

programm.parse();