const sortedSquares = function(nums) {
    
    for (let i=0; i<nums.length; i++) {
        nums[i] = Math.pow(nums[i], 2);
    }
    
    return nums.sort((a,b) => a-b);
};