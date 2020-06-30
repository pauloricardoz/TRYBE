// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  n = toString(n).split('');
  if(n[0]==='-') {
    const signal= n.unshift();
    n.reverse();
    return signal+n.join('');
  } else {
    n.reverse();
    return n.join('');
  }
}

module.exports = reverseInt;
