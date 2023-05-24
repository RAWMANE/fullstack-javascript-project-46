import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import { describe, test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const  nameOfFile = fileURLToPath(import.meta.url);
const nameOfDir = path.dirname(fileNamee);
const getFixturePath = (nameOfFile) => path.join( nameOfDir, '..', '__fixtures__',  nameOfFile);
const readFile = ( nameOfFile) => readFileSync(getFixturePath( nameOfFile), 'utf-8');

describe('genDiff', () => {
  test('difference from plain json', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    const plainResult = readFile('expected_plain.json');
    const result = genDiff(filePath1, filePath2);
    expect(result).toEqual(plainResult);
  });
  test('difference from plain yaml', () => {
    const filePath1 = getFixturePath('file1.yaml');
    const filePath2 = getFixturePath('file2.yaml');
    const plainResult = readFile('expected_plain.yaml');
    const result = genDiff(filePath1, filePath2);
    expect(result).toEqual(plainResult);
  });
  test('difference between trees', () => {
    const filePath1 = getFixturePath('filepath1.json');
    const filePath2 = getFixturePath('filepath2.json');
    const plainResult = readFile('expected_tree.json');
    const result = genDiff(filePath1, filePath2);
    expect(result).toEqual(plainResult);
  });
});