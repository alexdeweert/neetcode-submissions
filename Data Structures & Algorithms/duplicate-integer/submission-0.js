class Solution {
    hasDuplicate(nums) {
        const set = new Set()

        for(let i = 0; i < nums.length; i++) {
            const cur = nums[i];
            if(set.has(cur)) return true;
            set.add(cur)
        }

        return false;
    }
}
