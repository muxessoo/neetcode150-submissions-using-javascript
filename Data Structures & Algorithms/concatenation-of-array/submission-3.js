class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(2*n);
        let i = 0
        for (i;i<n;i++){
            ans[i] = ans[i+n] = nums[i]
        }
        return ans;
    }
}
