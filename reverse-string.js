/**
	Given an input string, reverse the string word by word.

	Example:  

	Input: "the sky is blue",
	Output: "blue is sky the".
	*/

var reverseWords = function(str) {
  let reversed = []
  str = str.split(' ')
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i])
  }
  return reversed.join(' ')
};
