console.log("============= string is palindrome or not===============");
function isPalindrome(str) {
  const cleanStr = str.replace(" ").toLowercase();
  const len = cleanStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanStr[i] != cleanStr[length - 1 - i]) {
      return false;
    }
  }
  return true ;
}
isPalindrome("madam");
isPalindrome("banana");
isPalindrome("rader");
isPalindrome("civil");
isPalindrome("noon");
isPalindrome("stats");