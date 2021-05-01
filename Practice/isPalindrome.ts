import { log } from "../utils";
import { getLinkedList, LinkNode } from "./../LinkList/LinkNode";
const palindrome = "Kawwak";

/** 入栈出栈 */
const isPalindromeWithStack = (str) => {
  const arr: [] = str.toLowerCase().split("");

  const stack = [];

  const isOdd = arr.length % 2 !== 0;
  for (let i = 0; i < arr.length; i++) {
    const isMidIndex = i === Math.floor(arr.length / 2);
    if (isOdd && isMidIndex) {
      continue;
    }
    // 当前元素与栈顶进行比较，相同则出栈，否则入栈
    if (arr[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length === 0;
};

// console.log(isPalindromeWithStack(palindrome))

/** 双指针 */
const isPalindromeWithDualPointer = (str) => {
  const arr = str.toLowerCase().split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindromeWithDualPointer(palindrome));

/** find the max length palindrome */
const findPalindrome = (str) => {
  const arr = str.toLowerCase().split("");

  const isOdd = arr.length % 2 !== 0;
  const mid = Math.floor(arr.length / 2);
  let left = isOdd ? mid - 1 : mid - 1;
  let right = isOdd ? mid + 1 : mid;
  const result = isOdd ? [arr[mid]] : [];

  while (left >= 0 && left <= right && right <= arr.length - 1) {
    if (arr[left] === arr[right]) {
      result.unshift(arr[left]);
      result.push(arr[right]);
    }
    left--;
    right++;
  }
  // 回文长度需大于1
  if (result.length <= 1) {
    return "";
  }

  return result.join("");
};

console.log(findPalindrome("ablevelab"));

/** linkedNode isPalindrome */
const linkedListHead = getLinkedList(5);

const isPalindromeByLinkedNode = (head: LinkNode) => {
  // copy of head , then reserve
  const reverse = (head) => {
    return;
  };
  const copyHead = JSON.parse(JSON.stringify(head));
  const reverseHead = reverse(copyHead);

  while (head.next !== null) {
    // if (reverseHead.data !== head.data) {
    //   return false;
    // }
  }
  return true;
};

const a = new Function("fn", 'return "a"');
log(a());
