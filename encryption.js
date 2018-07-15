/**
	HACKER RANK PROBLEM
	For example, the sentence if man was meant to stay on the ground god would have given us roots after removing spaces is 54 characters long. sqr root of 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.
	
	ifmanwas  
	meanttos          
	tayonthe  
	groundgo  
	dwouldha  
	vegivenu  
	sroots

	The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:

	imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

	Sample Input
	haveaniceday

	Sample Output:
	hae and via ecy
 */

let encryption = (s) => {
    let strings = new Array(Math.ceil(Math.sqrt(s.length))).fill('')

    for (let i = 0; i < strings.length; i++) {
        strings[i] += s.charAt(0)
        s = s.slice(1, s.length)
        if (i === strings.length - 1 && s.length) i = -1
    }
    return strings.join(' ')
}

