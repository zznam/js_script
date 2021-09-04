process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
async function getMovieTitles(substr) {


}
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var _substr = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    
    getMovieTitles(_substr);
});
