function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Test cases
console.log(toTitleCase("hello world")); // Output: "Hello World"
console.log(toTitleCase("javaScript is fun")); // Output: "JavaScript Is Fun"
console.log(toTitleCase("this is a test string")); // Output: "This Is A Test String"
console.log(toTitleCase("capitalize each word")); // Output: "Capitalize Each Word"
console.log(toTitleCase("a quick brown fox")); // Output: "A Quick Brown Fox"
