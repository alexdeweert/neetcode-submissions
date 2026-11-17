class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        if len(nums) == 1:
            return 1

        if len(nums) == 0:
            return 0

        maxi = 1
        numset = set(nums)
        
        # iterate over nums, for each value encountered check to see if it's left neighbor exists
        # if it does exist, its the start of a sequence so reset cur

        # if it does not exist, then it's the start, enter a while loop, while next exists increment cur and set max

        cur = 0
        for i, num in enumerate(nums):
            # prev num didnt exist so it's the start of a sequence
            # reset cur and count up
            if num-1 not in numset:
                cur = 1
                j = num + 1
                while j in numset:
                    cur += 1
                    j += 1
                    maxi = max(cur, maxi)
        return maxi