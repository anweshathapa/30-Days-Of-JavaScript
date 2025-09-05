// LEETCODE 2704. To Be Or Not To Be

// Question: Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//Solution:

function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}
