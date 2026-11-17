class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        '''
        There's an optimal solution that uses O(1) memory.
        For now im skipping this to use extra memory and maybe optimize later.

        The idea is we want to computer a prefix and postfix array for each direction

        Then, for the output array, ignoring the current i, you multiply together
        the prefix at i-1, and the postfix position at i+1

        If i-1 is out of bounds, multiply by 1
        if the i+1 is out of bounds, multiply by 1
        '''
        prefix = []
        postfix = []
        result = []

        prefixProduct = 1
        postfixProduct = 1
        for num in nums:
            prefixProduct = num * prefixProduct
            prefix.append(prefixProduct)
            
        for num in nums[::-1]:
            postfixProduct = num * postfixProduct
            postfix.append(postfixProduct)

        postfix = postfix[::-1]

        # Now, for the output, for current i, multiply nprefix[i-1] and postfix[i+1]
        for i, num in enumerate(nums):
            if i == 0:
                result.append( postfix[i+1] )
            elif i == len(nums)-1:
                result.append( prefix[i-1] )
            else:
                result.append( prefix[i-1] * postfix[i+1] )

        return result