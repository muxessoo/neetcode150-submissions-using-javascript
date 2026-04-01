class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_p = float('inf')
        max_p = 0
        for price in prices:
            if price < min_p:
                min_p = price
            if price - min_p > max_p:
                max_p = price - min_p
        return max_p