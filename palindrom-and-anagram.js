console.log("================================ 1 ====================================");

function isPalindrome(str) {
  const cleanedStr = str.replace().toLowerCase();
  
  // Get the reversed string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
}

// Example usage:
console.log(`is String "Madam" is palindrome : `,isPalindrome("Madam")); // true
console.log(`is String "Dad" is palindrome : `,isPalindrome("Dad"));   // true
console.log(`is String "Hello" is palindrome : `,isPalindrome("Hello")); // false

console.log("================================ 2 ====================================");

function areAnagrams(str1, str2) {
    // Helper function to clean and sort the string
    function cleanAndSort(str) {
      return str.replace().toLowerCase().split('').sort().join('');
    }
    
    // Clean and sort both strings
    const sortedStr1 = cleanAndSort(str1);
    const sortedStr2 = cleanAndSort(str2);
    
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  console.log(`is String "Silent" & "Listen" is Anagram : `,areAnagrams("silent", "Listen")); // true
  console.log(`is String "Hello" & "world" is Anagram : `,areAnagrams("Hello", "world"));   // false
  console.log(`is String "Such" & "much" is Anagram : `,areAnagrams("Such", "much"));   // false