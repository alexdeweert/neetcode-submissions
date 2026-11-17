class Solution {
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            const have = nums[i];
            let need = target - have;

            if(map.has(need)) return [map.get(need), i]

            map.set(have, i);
        }
    }
}
