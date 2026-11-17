class Solution:
    def reverseBits(self, n: int) -> int:
        '''
        for every bit in n (from right to left - e.g. AND it with 1 to get it)
        we want to OR that with a result, and then bit shift LEFT one space.

        But how can we get the correct number of leading zeros?
        '''
        result = 0
        for i in range(32):
            # gets the result bit that we're looking for in the 1s spot
            bit = (n >> i) & 1
            
            # OR the result with a bit shifted 1 in order to write to the
            # correct position - e.g. 31-0 is bit shift 31 over to the left
            # 31-31 is bit shifted 0
            result = result | (bit << (31-i))

        return result