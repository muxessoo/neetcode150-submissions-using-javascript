class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        my_set = set(nums)
        max_count = 0
        for num in my_set:
            if (num-1) not in my_set:
                count = 1
                while (num+count) in my_set:
                    count +=1
                max_count = max(max_count,count)
        return max_count