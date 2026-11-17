class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        '''
        If this is a sorted list can we just count up and see what's missing?
        That's the brute force / naive way.

        How can we use bit manip to make this more efficient?

        Could we iterate in range 0->n+1 doing accumulating an XOR with each value?

        This could posibly work since if we compare
        [1,2,3] with [1,3]

        If we XOR'd all columns with a summed up value of each, it might result

        1 + 2 + 3 = 6
        1 + 3 = 4

        missing is 2.
        Don't even need bit manip.
        '''
        result = len(nums)

        for i in range(len(nums)):
            result = result + (i - nums[i])

        return result