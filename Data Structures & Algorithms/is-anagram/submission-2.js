class Solution {
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const map = new Map()

        for(let i = 0; i < s.length; i++) {
            let ch = s[i]
            if(map.has(ch)) map.set(ch, map.get(ch) + 1);
            else map.set(ch, 1);
        }

        // map.forEach((v,k) => {
        //     console.log(`k: ${k}, v: ${v}`)
        // })

        for(let i = 0; i < t.length; i++) {
            let ch = t[i]
            if(map.has(ch)) map.set(ch, map.get(ch) - 1);
            if(map.get(ch) == 0) map.delete(ch)
        }
        // map.forEach((v,k) => {
        //     console.log(`k: ${k}, v: ${v}`)
        // })

        return map.size == 0;
    }
}
