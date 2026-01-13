export function containsDuplicate(nums) {
  const map = {};

  for (const num of nums) {
    map[num] = true;
  }

  const uniqueCount = Object.keys(map).length;

  return uniqueCount < nums.length;
}
