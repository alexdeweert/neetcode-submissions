class Solution {
    isPalindrome(s) {
        const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const isalphanum = (ch) => {
            return alphanum.includes(ch);
        };
        const arr = s.toLowerCase().split('').filter(ch => isalphanum(ch));

        let lo = 0;
        let hi = arr.length-1;

        while(lo < hi) {
            const left = arr[lo]
            const right = arr[hi]

            if(left != right) return false;
            lo++;
            hi--;
        }
        return true;
    }
}
