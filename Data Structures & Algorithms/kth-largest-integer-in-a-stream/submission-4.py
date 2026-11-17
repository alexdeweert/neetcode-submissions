class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.minh = nums
        self.k = k
        heapq.heapify(self.minh)
        while len(self.minh) > k:
            heapq.heappop(self.minh)

    def add(self, val: int) -> int:
        heapq.heappush(self.minh, val)
        
        if len(self.minh) > self.k:
            heapq.heappop(self.minh)
        return self.minh[0]
        
        
