class Solution:
    def hammingWeight(self, n: int) -> int:
        '''
        Could we do AND with max safe integer?

        That would only result in the same value though.

        Could convert to string and count the nums.
        Could do bit shifting somehow and then AND it with 1
        and the count the number of times its 1
        '''
        res = 0
        while n > 0:
            temp = n & 1
            if temp > 0:
                res += 1
            n = n >> 1
        return res
