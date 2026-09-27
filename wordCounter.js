//Date: September 26, 2026

/*
Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.
*/

function countWords(sentence) {
  let arr = sentence.split(' ');
  return arr.length;
}