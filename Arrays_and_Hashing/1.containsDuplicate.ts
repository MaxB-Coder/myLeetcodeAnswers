/* Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]
Output: true

Example 2:

Input: nums = [1, 2, 3, 4]
Output: false */

export const containsDuplicate = (nums: number[]): boolean => {
  const map: { [key: number]: boolean } = {};

  for (const num of nums) {
    map[num] = true;
  }

  const uniqueCount: number = Object.keys(map).length;

  return uniqueCount < nums.length;
};
