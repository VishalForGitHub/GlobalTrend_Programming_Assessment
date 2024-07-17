function areAnagrams(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // If the lengths of the cleaned strings are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("triangle", "integral")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false
console.log(areAnagrams("anagram", "nag a ram")); // Output: true
console.log(areAnagrams("School Master", "The Classroom")); // Output: true
console.log(areAnagrams("Astronomer", "Moon starer")); // Output: true
console.log(areAnagrams("Conversation", "Voices rant on")); // Output: true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Output: true
