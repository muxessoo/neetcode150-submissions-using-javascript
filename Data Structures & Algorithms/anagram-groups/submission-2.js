class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let dict = {}
        for (let s of strs ){
            let key = s.split('').sort().join('')
            if(!dict[key])
                dict[key]=[]
            dict[key].push(s)       
        }
        return Object.values(dict)   
        
    }
}
