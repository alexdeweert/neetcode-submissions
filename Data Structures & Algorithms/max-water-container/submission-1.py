class Solution:
    def maxArea(self, heights: List[int]) -> int:
        lo = 0
        hi = len(heights)-1
        maxw = 0

        while lo < hi:
            smaller = min(heights[lo], heights[hi])
            length = hi - lo
            maxw = max(maxw, smaller * length)
            if heights[lo] < heights[hi]:
                lo += 1
            else:
                hi -= 1
        return maxw