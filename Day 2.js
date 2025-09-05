//Question no. 2620 COUNTERS
//******************** Given an integer n, return a counter function. This counter function initially returns n and then returns 1 m
// ore than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).***************//

//***************Solution********************//

function createCounter(n) {
  return function() {
    return n++;
  }
}
