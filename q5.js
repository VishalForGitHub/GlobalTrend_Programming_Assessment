function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ['a', 'b', 'c']
console.log(removeDuplicates([1, '1', 2, '2', 2])); // Output: [1, '1', 2, '2']
console.log(removeDuplicates([])); // Output: []
