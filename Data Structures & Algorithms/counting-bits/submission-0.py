class Solution:
    def countBits(self, n: int) -> List[int]:
        result = []
        for i in range(0, n+1):
            tempResult = 0
            while i > 0:
                if i & 1 == 1:
                    tempResult += 1
                i = i >> 1
            result.append(tempResult)
        return result