function flattenArrayUsingFlat(arr) {
    return arr.flat(Infinity);
}

// Test cases
console.log(flattenArrayUsingFlat([[1, [2, [3, 4], 5], 6]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArrayUsingFlat([[1, 2, [3]], 4, [[5, 6], 7]])); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArrayUsingFlat([[[[1]]], 2, [[3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
