class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for i, a in enumerate(nums):
            if i > 0 and nums[i-1] == a:
                continue
            lo = i+1
            hi = len(nums)-1

            while lo < hi:
                cursum = a + nums[lo] + nums[hi]

                if cursum > 0:
                    hi -= 1
                elif cursum < 0:
                    lo += 1
                else:
                    result.append([a, nums[lo], nums[hi]])
                    lo += 1
                    while lo < hi and nums[lo] == nums[lo-1]:
                        lo += 1
        return result