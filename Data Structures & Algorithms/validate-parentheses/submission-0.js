class Solution {
    /**
     * if opens are observed, push
     * 
     * if closed's are observed, pop, and ensure matching is correct.
     * if at any time its not correct, then return false, else return true eventually if stack empty.
     */
    isValid(s) {
        const stack = [];

        for(let i = 0; i < s.length; i++) {
            const ch = s[i];

            if(ch == '(' || ch == '[' || ch == '{') stack.push(ch);
            else {
                const popped = stack.pop();
                if(ch == ']') {if(popped != '[') return false;}
                if(ch == ')') {if(popped != '(') return false;}
                if(ch == '}') {if(popped != '{') return false;}
            }
        }
        if(stack.length) return false;
        return true;
    }
}
