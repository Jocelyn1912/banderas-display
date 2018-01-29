//chai.assert
// Archivo `isVowel.spec.js`

const { assert } = require('chai');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});


/*assert Node.js
// Archivo `isVowel.spec.js`

const assert = require('assert');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});
*/


/*Vanilla
const isVowel = require('./isVowel');

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error (`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assertEqual(isVowel('a'), true);
  });

  it('debería devolver false para letra b', () => {
    assertEqual(isVowel('b'), false);
  });

});
*/





/* Mocha
const isVowel = require('./isVowel');

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('debería devolver false para letra b', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
*/


/*const isVowel = require('./isVowel');

console.log('debería devolver true para letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver false para letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}*/