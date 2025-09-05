// LEETCODE 2634. Filter Elements from Array

// Question: Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

//******SOLUTION********

function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
