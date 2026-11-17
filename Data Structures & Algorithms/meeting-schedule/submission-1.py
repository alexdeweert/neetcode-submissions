"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

Brute force: for each interval, check all other intervals to see if there's a conflict.
This is n^2 time complexity.

How can it be done efficiently?

We can sort by start time. Which is nlogn, but what does a sorted list get us.


"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key = lambda i : i.start)

        for i in range(1, len(intervals)):
            i1 = intervals[i-1]
            i2 = intervals[i]

            if i1.end > i2.start:
                return False
        return True

