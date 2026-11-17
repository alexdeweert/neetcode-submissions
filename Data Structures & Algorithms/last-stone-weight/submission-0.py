class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)

        while len(stones) > 1:
            if len(stones) > 1:
                stone1 = -heapq.heappop(stones)
                stone2 = -heapq.heappop(stones)
                # if stone1 == stone2 do nothing since they are equal and are destroyed
                if stone1 < stone2:
                    newstone = stone2 - stone1
                    newstone = -newstone
                    heapq.heappush(stones, newstone)
                elif stone2 < stone1:
                    newstone = stone1 - stone2
                    newstone = -newstone
                    heapq.heappush(stones, newstone)
        if len(stones) == 1:
            return -stones[0]
        return 0

