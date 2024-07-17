function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    }).join(' ');
}

// Test cases
console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetterOfEachWord("javaScript is fun")); // Output: "Javascript Is Fun"
console.log(capitalizeFirstLetterOfEachWord("this is a test string")); // Output: "This Is A Test String"
console.log(capitalizeFirstLetterOfEachWord("capitalize each word")); // Output: "Capitalize Each Word"
console.log(capitalizeFirstLetterOfEachWord("a quick brown fox")); // Output: "A Quick Brown Fox"