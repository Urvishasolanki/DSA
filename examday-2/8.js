// ### Q8: Check Palindrome
// Check if the given string is a palindrome (considering only alphanumeric characters and ignoring case).

// **Example:**
// ```
// Input:
// A man, a plan, a canal: Panama

// Output:
// true
// ```
let str = "A man, a plan, a canal: Panama"
function checkpalindrome(str){
let str2=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
let reverseinp = str2.split(``).reverse().join(``);
return str2 === reverseinp;
}
console.log(checkpalindrome(str))
