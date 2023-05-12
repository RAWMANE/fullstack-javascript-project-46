import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const genDiff = (filePath1, filePath2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filePath1), 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filePath2), 'utf-8'));
  const getKeys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(getKeys);
  const gens = sortedKeys.map((getKey) => {
    if (_.has(data1, getKey) && !_.has(data2, getKey)) {
      const result = `  - ${getKey}: ${data1[getKey]}`;
      return result;
    } if (!_.has(data1, getKey) && _.has(data2, getKey)) {
      const result = `  + ${getKey}: ${data2[getKey]}`;
      return result;
    } if (data1[getKey] === data2[getKey]) {
      const result = `    ${getKey}: ${data1[getKey]}`;
      return result;
    }

    return gens;
  });
};
export default genDiff;
