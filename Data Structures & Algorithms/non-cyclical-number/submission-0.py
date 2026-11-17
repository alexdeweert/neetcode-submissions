class Solution:
    def isHappy(self, n: int) -> bool:
        newSet = set()
        newSet.add(n)
        while n != 1:
            n = self.sumOfSquares(n)
            if n in newSet:
                return False
            newSet.add(n)
        return True
        

    def sumOfSquares(self, n: int) -> int:
        sum = 0
        while(n):
            # digit
            dig = n % 10
            n = n // 10
            sum += pow(dig, 2)
        return sum