class Solution:
    def climbStairs(self, n: int) -> int:
        '''
        Use bottom up dynamic programming.
        Essentially this is like the fib sequence.

        Starting from the last three steps there are three base cases we work UP from (bottom up!)

        At position n (e.g. step 5) it's zero
        At position n-1 (e.g. step 4) it's 1
        At position n-2 (e.g. step 3) it's 2

        [ ][ ][2][1][0]
        '''
        steps = [1,1]
        step = 1
        while step < n:
            newstep = steps[0] + steps[1]
            steps[1] = steps[0]
            steps[0] = newstep
            step = step + 1
        return steps[0]
        
