function ispalindrome(str){
    let result=str.split('').reverse().join("");
    if (result===str) {
        return true;
    }
    return false;

}
let str1="nitin"
let str2="rama"
let str3="radar"
console.log(ispalindrome(str1)); // false
console.log(ispalindrome(str2)); 
console.log(ispalindrome(str3)); 