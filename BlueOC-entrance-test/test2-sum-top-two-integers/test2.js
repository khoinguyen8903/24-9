function sumOfTopTwo(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two integers.");
    }
    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}


function runUnitTests() {
    const testCases = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 20, 30, 40], expected: 70 },
        { input: [5, 1], expected: 6 },
        { input: [100, 99, 98], expected: 199 },
        { input: [-10, -20, -30, -5], expected: -15 },
    ];

    testCases.forEach((test, index) => {
        const result = sumOfTopTwo(test.input);
        const passed = result === test.expected;
        console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
        if (!passed) {
            console.log(`   Input: ${test.input}`);
            console.log(`   Expected: ${test.expected}, but got: ${result}`);
        }
    });
}

runUnitTests();
