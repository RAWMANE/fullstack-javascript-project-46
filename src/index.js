import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parse.js'
import buildTree from './treeBuilder.js';
import format from './formatters/index.js';

const  fullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extract  = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extract(filepath));


function genDiff(path1, path2, formatName = 'stylish') {
  const data1 = getData( fullPath(path1));
  const data2 = getData( fullPath(path2));

  const tree = buildTree(data1, data2);
  console.log(tree);
  return format(tree, formatName);
}
export default genDiff; 