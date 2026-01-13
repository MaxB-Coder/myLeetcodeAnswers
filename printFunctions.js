export function testPrint(testName) {
  console.log(testName + '\n');
}

export function passedOrFailed(testNumber, condition) {
  if (condition) {
    console.log(`Test ${testNumber}: PASSED`);
  } else {
    console.log(`Test ${testNumber}: FAILED`);
  }
}

export function endStamp() {
  console.log('==================');
  console.log('\n');
}
