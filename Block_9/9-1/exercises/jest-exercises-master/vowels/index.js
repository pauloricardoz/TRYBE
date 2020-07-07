// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str.split('').reduce((a,c) => /[aeiou]/gi.test(c)===true?a+=1:a,0);
}
vowels('aeiou')

module.exports = vowels;
