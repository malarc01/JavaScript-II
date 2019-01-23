// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, function(length) {
    console.log(length)
});

function last(arr, cb) {
    return cb(arr[arr.length-1])
  // last passes the last item of the array into the callback.
}

last(items, function(last) {
     console.log(last)});

function sumNums(x, y, func) {
    return func(x+y)
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(1,1,function(sumNums) {
        console.log(sumNums)
});

function multiplyNums(x, y, cb) {
    return cb(x*y)
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(5,5,function(multiplyNums) {
        console.log(multiplyNums)
});


function contains(item, list, callback) {
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) { return callback(true) }
  }{ return callback(false)}
}//wholefunction

contains('odsg', items, function(contains){console.log(contains)});




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
