/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums,i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long = 0) {
  if(i === words.length) return long;
  long = Math.max(words[i].length, long);
  return longest(words, i+1, long);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, result='') {
  if(i >= str.length) return result;
  return result+= str[i] + everyOther(str, i+2); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let leftIdx = i;
  let rightIdx = str.length - i -1;
  if(leftIdx >= rightIdx) return true;
  if(str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, i+1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, result='') {
  if(result.length === str.length) return result;
  result += str[str.length - i -1];
  return revString(str, i+1, result)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let result=[];
for(let key in obj){
  if(typeof obj[key]=== 'string') {
    result.push(obj[key])
  } else if(typeof obj[key] === 'object') {
    result.push(...gatherStrings(obj[key])) 
  } 
}

return result;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, l=0, r=arr.length-1) {
  if(r < l) return -1;
  let midIdx = Math.floor((r+l)/2);
  if(arr[midIdx] === val){
    return midIdx;
  }
  if(arr[midIdx] > val){
    return binarySearch(arr, val, l, midIdx-1)
  } 

    return binarySearch(arr, val, midIdx+1, r)
  
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
