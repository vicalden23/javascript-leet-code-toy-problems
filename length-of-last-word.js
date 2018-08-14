/**
	Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

	If the last word does not exist, return 0.

	Note: A word is defined as a character sequence consists of non-space characters only.

	Example:

	Input: "Hello World"
	Output: 5
	*/

	/**
	 * @param {string} s
	 * @return {number}
	 */
let lengthOfLastWord = function(s) {
  let words = s.split(' ')
  if (!s.length) return 0
  for (let i = words.length - 1; i >= 0; i--) {
     if (words[i].length) return words[i].length
  }
  return 0
};

