//**** LEETCODE 2666. Allow One Function Call
// Question: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// ******************************************** Solution ****************************************************************

function once(fn){
    let called= false;
    let result;
    return function(...args){
        if(!called){
          result= fn(...args);
          called= true;
          return result;
        }
    return undefined;
    }
}
