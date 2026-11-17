class Solution {
    isPalindrome(s) {
        const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const isalphanum = (ch) => alphanum.includes(ch);
        const arr = s.toLowerCase().split('').filter(ch => isalphanum(ch));

        let lo = 0;
        let hi = arr.length-1;

        while(lo < hi) {
            if(arr[lo++] != arr[hi--]) return false;
        }
        return true;
    }
}
