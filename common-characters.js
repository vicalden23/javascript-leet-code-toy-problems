/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



let commonCharacters = function(string1, string2) {
  let common = ''
  for (let i = 0; i < string1.length; i++) {
  	let curr = string1.charAt(i)
  	if (string2.indexOf(curr) >= 0 && common.indexOf(curr) < 0) {
  		common += curr
  	}
  }
  return common
};
