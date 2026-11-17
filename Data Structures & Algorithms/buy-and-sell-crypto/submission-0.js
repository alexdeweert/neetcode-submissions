class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        if(prices.length == 1) return 0;

        let left = 0;
        let right = left + 1;

        let max = 0;
        while(left < prices.length) {

            while(right < prices.length) {
                //test buy
                max = Math.max((prices[right] - prices[left]), max);
                right++;
            }

            left++;
            right = left + 1;
        }

        return max;
    }
}
