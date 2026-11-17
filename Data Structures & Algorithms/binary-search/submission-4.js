class Solution {
    search(nums, target) {


        let mid = -1;
        let lo = 0;
        let hi = nums.length-1;
        while(lo <= hi) {
            mid = Math.floor((lo + hi) / 2);


            //else is it right?
            if(nums[mid] > target) {
                hi = mid - 1;
            }

            //else is it left?
            else if (nums[mid] < target) {
                lo = mid + 1;
            }

            else {
                return mid;
            }

        }

        return -1;

    }
}
