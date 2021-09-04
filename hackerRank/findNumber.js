'use strict';


main();

/*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
    // Write your code here
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e == k) {
            return "YES";
        }
    }
    return "NO";
}

function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let k = 6;
    const result = findNumber(arr, k);
    console.log(result + '\n');
}