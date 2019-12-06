function isInteresting(number, awesomePhrases) {
  if (isInterestingNum(number, awesomePhrases)) {
    return 2;
  } else if (isInterestingNum(number + 1, awesomePhrases) ||
             isInterestingNum(number + 2, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }
}

function digitAndZeros(number) {
  return (number+'').split('').slice(1).sort().slice(-1) == 0;
}

function digitsSame(number) {
  check = (number+'').split('').sort();
  return check.slice(0,1) == check.slice(-1);
}

function incrementing(number) {
  return (number+'').split('')
    .reduce((check, digit, idx, arr) => check && digit == ((Number(arr[0]) + idx)+'').slice(-1), true);
}

function decrementing(number) {
  return (number+'').split('')
    .reduce((check, digit, idx, arr) => check && digit == ((Number(arr[0]) - idx)+''), true);
}

function palindrome(number) {
  return (number+'').split('').reverse().join('') == (number+'');
}

function awesomePhrase(number, phrases) {
  return phrases.reduce((check, phrase) => check = check || phrase == number,
    false);
}

function isInterestingNum(number, phrases) {
  return ((number+'').length > 2 && (
          digitAndZeros(number) ||
          digitsSame(number) ||
          incrementing(number) ||
          decrementing(number) ||
          palindrome(number) ||
          awesomePhrase(number, phrases)))
}

var assert = require('assert');
assert.equal(isInteresting(3, [1337, 256]),     0);
assert.equal(isInteresting(1336, [1337, 256]),  1);
assert.equal(isInteresting(1337, [1337, 256]),  2);
assert.equal(isInteresting(11208, [1337, 256]), 0);
assert.equal(isInteresting(11209, [1337, 256]), 1);
assert.equal(isInteresting(11211, [1337, 256]), 2);
