function mostFrequentStringLengths(arr) {
    let lengthCount = {};
    arr.forEach((str) => {
        lengthCount[str.length] = (lengthCount[str.length] || 0) + 1;
    });
    let maxFrequency = Math.max(...Object.values(lengthCount));
    let result = arr.filter(str => str.length === parseInt(Object.keys(lengthCount).find(key => lengthCount[key] === maxFrequency)));
    return result;
}

function runUnitTests() {
    const testCases = [
        {
            input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
            expected: ['ab', 'cd', 'gh']
        },
        {
            input: ['one', 'two', 'three', 'four', 'five', 'six'],
            expected: ['one', 'two', 'six']
        },
        {
            input: ['a', 'aa', 'aaa', 'b', 'bb', 'bbb'],
            expected: ['a', 'b']
        }
    ];

    testCases.forEach((test, index) => {
        const result = mostFrequentStringLengths(test.input).sort(); // Sort to ensure order doesn't matter
        const passed = JSON.stringify(result) === JSON.stringify(test.expected.sort()); // Compare sorted arrays
        console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
        if (!passed) {
            console.log(`   Input: ${test.input}`);
            console.log(`   Expected: ${test.expected}, but got: ${result}`);
        }
    });
}

runUnitTests();
