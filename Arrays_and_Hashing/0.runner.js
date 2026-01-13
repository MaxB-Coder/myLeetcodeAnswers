import { testPrint, passedOrFailed, endStamp } from '../printFunctions.js';
import { nums1, nums2 } from './0.data.js';

import { containsDuplicate } from './1.containsDuplicate.js';

export function runArraysAndHashing() {
  console.log('Arrays and Hashing');
  console.log('==================');

  testPrint('Contains Duplicate');
  passedOrFailed(1, containsDuplicate(nums1) === true);
  passedOrFailed(2, containsDuplicate(nums2) === false);
  endStamp();
}
