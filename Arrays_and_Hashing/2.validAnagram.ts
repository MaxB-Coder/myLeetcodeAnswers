/* Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"
Output: true

Example 2:

Input: s = "jar", t = "jam"
Output: false

Constraints:

s and t consist of lowercase English letters. */

export const validAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const countArr = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let sValue = s.charCodeAt(i) - 'a'.charCodeAt(0);
    let tValue = t.charCodeAt(i) - 'a'.charCodeAt(0);

    countArr[sValue]++;
    countArr[tValue]--;
  }

  if (String(countArr) === String(Array<number>(26).fill(0))) {
    return true;
  } else {
    return false;
  }
};
