//LEETCODE 2626 Array Reduce Transformation
// QUESTION. Given an integer array nums, a reducer function fn, and an initial value init, 
// return the final result obtained by executing the fn function on each element of the array,
// sequentially, passing in the return value from the calculation on the preceding element.

//*************************************SOLUTION*********************************************//

function reduce(nums, fn, init) {
    let val = init;
    for(let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}
