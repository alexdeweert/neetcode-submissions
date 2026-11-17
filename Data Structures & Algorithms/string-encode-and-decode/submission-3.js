class Solution {
    encode(strs) {
	let result = ""
    for(let i = 0; i < strs.length; i++) {
        let str = strs[i]
        str = `${str.length}#${str}`
        console.log(str)
        result += str
    }
    return result
};

/**
 * Decodes a single string to a list of strings.
 */
decode(s) {

    //iterate over s, if we see number-hash, then keep iterating but add number of chars to cur result
    //once we reach end of nummber-of-chars, push to result, keep going
    let result = []
    let i = 0
    while(i < s.length) {
        let j = i
        while(s[j] != '#') {
            j++
        }
        let length = parseInt(s.substring(i,j+1))
        let substr = s.substring(j+1, j+length+1)
        result.push(substr)
        i = j + length + 1
    }

	return result
};
}
