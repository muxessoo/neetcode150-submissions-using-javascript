class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = {}
        for char in strs:
            sorted_strs = "".join(sorted(char))

            if sorted_strs not in ans:
                ans[sorted_strs]=[]
            ans[sorted_strs].append(char)
        return list(ans.values())