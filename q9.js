function filterOutEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Test cases
console.log(filterOutEvenNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(filterOutEvenNumbers([2, 4, 6, 8, 10])); // Output: []
console.log(filterOutEvenNumbers([1, 3, 5, 7, 9])); // Output: [1, 3, 5, 7, 9]
console.log(filterOutEvenNumbers([])); // Output: []
