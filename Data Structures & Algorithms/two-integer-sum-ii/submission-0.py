class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        lo = 0
        hi = len(numbers)-1

        while lo < hi:
            cur = numbers[lo] + numbers[hi]

            if cur > target:
                hi -= 1
            elif cur < target:
                lo += 1
            else:
                return [lo + 1, hi + 1]
        return []