#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import { program } from 'commander';

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f,--formant <type>', 'output format')
  .name('gendiff')
  .parse();
