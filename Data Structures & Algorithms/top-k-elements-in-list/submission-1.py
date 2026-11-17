class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # array of arrays, size of nums
        # we go through nums and push each value there into the index position
        # of the array which matches the frequency observed. e.g. three 1's gets pushed into index 3
        # then going backwards k times, add one value into the result
        # Do we even need a hashmap? kinda ya cuz we have to count the frequency.
        
        # key is the value of num, value is frequency observed
        hmap = {}
        for num in nums:
            if num in hmap:
                hmap[num] += 1
            else:
                hmap[num] = 1
        
        buckets = [[] for _ in range(len(nums))]

        
        # the bucket index is the frequency num occurs
        # there can be multiple nums in the same position
        for key in hmap:
            freq = hmap[key]
            buckets[freq-1].append(key)

        # Now we want to count backwards
        found = 0
        res = []
        for bucket in buckets[::-1]:
            if len(bucket) > 0:
                for v in bucket:
                    res.append(v)
                    found += 1
                    if found == k:
                        return res
                    

        
        return res