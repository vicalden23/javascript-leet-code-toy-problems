/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return []
    let anagrams = []
    let buildAnagram = (anagram, str) => {

        if (anagram.length === p.length) {
            anagrams.push(anagram)
        }
        
        for (let i = 0; i < str.length; i++) {
            buildAnagram(anagram + str[i], str.slice(0, i) + str.slice(i + 1))
        }
    }
    
    buildAnagram('', p)
    
    let output = []
    let count = p.length
    for (let i = 0; i < s.length; i ++) {
        let substring = s.slice(i, count)
        count++
        anagrams.forEach((ana) => {
            if (ana === substring) {
                output.push(i)   
            }
        })
    }
         
    return output
};