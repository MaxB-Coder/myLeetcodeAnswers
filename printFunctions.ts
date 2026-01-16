export function testPrint(testName: string) {
  console.log(testName + '\n');
}

export function passedOrFailed(testNumber: number, condition: boolean) {
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
