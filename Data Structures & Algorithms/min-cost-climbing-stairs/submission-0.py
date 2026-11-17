class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        '''
        Kind of work backwards on the list
        but we can add a placeholder to the end of 0, which is the goal
        '''
        cost.append(0)
        
        # for i, item in enumerate(reversed(cost[0:len(cost)-3])):
        for i in range(len(cost) - 3, -1, -1):
            # we ignore the last two positions
            # at the first, write the min of cost + (n+1) or cost + (n+2)
            cost1 = cost[i] + cost[i+1]
            cost2 = cost[i] + cost[i+2]
            cost[i] = min(cost1, cost2)
        
        print(cost)
        return min(cost[0], cost[1])