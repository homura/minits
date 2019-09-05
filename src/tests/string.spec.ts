import test from 'ava';
import { runCode } from './util';

const srcStringElem = `
function main(): number {
  let s = "Hello";
  if (s[0] !== "H") {
      return 1;
  }
  if (s[1] !== "e") {
      return 1;
  }
  if (s[4] !== "o") {
      return 1;
  }
  return 0;
}
`;

const srcStringLength = `
function main(): number {
  let s = "Hello";
  return s.length
}
`;

test('test string elem', async t => {
  await runCode(srcStringElem);
  t.pass();
});

test('test string length', async t => {
  await runCode(srcStringLength);
  t.pass();
});
