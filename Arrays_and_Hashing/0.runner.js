import { nums1, nums2 } from './0.data.js';

import { containsDuplicate } from './1.containsDuplicate.js';

export function runArraysAndHashing() {
  console.log('Arrays and Hashing');
  console.log('==================');

  console.log('Contains Duplicate');
  console.log('Test 1:', containsDuplicate(nums1)); // True
  console.log('Test 2:', containsDuplicate(nums2)); // False
  console.log('==================');
  console.log('\n');
}
