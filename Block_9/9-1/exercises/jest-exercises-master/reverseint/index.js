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
  if(n === 0) return 0
  n = n.toString().split('');
  if(n[0]==='-') {
    const signal= n.shift();
    if (n[n.length-1]!== 0) {
    n.reverse();
    } else {
      while (n[n.length-1]=== 0 && n.length>0)
      n.pop();
    }
    return parseInt(signal+n.join(''));
  } else {
    n.reverse();
    return parseInt(n.join(''));
  }
}

module.exports = reverseInt;
