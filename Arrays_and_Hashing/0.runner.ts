import { testPrint, passedOrFailed, endStamp } from '../printFunctions.ts';
import { data } from './0.data.ts';

import { containsDuplicate } from './1.containsDuplicate.ts';
import { validAnagram } from './2.validAnagram.ts';
import { twoSum } from './3.twoSum.ts';
import { groupAnagrams } from './4.groupAnagrams.ts';
import { topKFrequentElements } from './5.topKFrequentElements.ts';

export function runArraysAndHashing() {
  console.log('Arrays and Hashing');
  console.log('==================');

  testPrint('Contains Duplicate');
  passedOrFailed(1, containsDuplicate(data.nums1) === true);
  passedOrFailed(2, containsDuplicate(data.nums2) === false);
  endStamp();

  testPrint('Valid Anagram');
  passedOrFailed(1, validAnagram(data.s1, data.t1) === true);
  passedOrFailed(2, validAnagram(data.s2, data.t2) === false);
  endStamp();

  testPrint('Two Sum');
  passedOrFailed(
    1,
    JSON.stringify(twoSum(data.sumNums1, data.target1)) ===
      JSON.stringify([0, 1])
  );
  passedOrFailed(
    2,
    JSON.stringify(twoSum(data.sumNums2, data.target2)) ===
      JSON.stringify([0, 2])
  );
  passedOrFailed(
    3,
    JSON.stringify(twoSum(data.sumNums3, data.target3)) ===
      JSON.stringify([0, 1])
  );
  endStamp();

  testPrint('Group Anagrams');
  passedOrFailed(
    1,
    JSON.stringify(groupAnagrams(data.strs1)) ===
      JSON.stringify([['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']])
  );
  passedOrFailed(
    1,
    JSON.stringify(groupAnagrams(data.strs2)) === JSON.stringify([['x']])
  );
  passedOrFailed(
    1,
    JSON.stringify(groupAnagrams(data.strs3)) === JSON.stringify([['']])
  );
  endStamp();

  testPrint('Top K Frequent Elements');
  passedOrFailed(
    1,
    JSON.stringify(topKFrequentElements(data.kNums1, data.k1)) ===
      JSON.stringify([2, 3])
  );
  passedOrFailed(
    2,
    JSON.stringify(topKFrequentElements(data.kNums2, data.k2)) ===
      JSON.stringify([7])
  );

  endStamp();
}
