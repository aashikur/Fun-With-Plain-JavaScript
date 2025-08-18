/* ===================================
 Problem 1: Reverse a String

 Example:
 Input: "hello"
 Output: "olleh"
=================================== */
const ReverseString = (s) => {
    for (let i = 0; i < s.length; i++) {
        r += s[s.length - i - 1];
    }
    return r;
}








/* ===================================
 Problem 2: Count Vowels in a String

 Example:
 Input: "programming"
 Output: 3
=================================== */
const CountVowels = (str1) => {
    let counter = 0;
    let str = str1.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            counter++;
        }
    }
    return counter;
}











/* ===================================
 Problem 3: Check for Palindrome

 Example:
 Input: "madam" => true
 Input: "hello" => false
=================================== */
const isPalindrome = (str) => {
    let bool = true;
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] != str[j]) {
            bool = false;
            break;
        }
    }
    return bool;
}








/* ===================================
 Problem 4: Find the Maximum Number

 Example:
 Input: [5, 1, 9, 3]
 Output: 9
=================================== */

const FindMax = arr => {
    if (!Array.isArray(arr)) {
        return "Is Not An Array";
    }

    let max = arr[0];
    for (let value of arr) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}








/* ===================================
 Problem 5: Remove Duplicates from an Array

 Example:
 Input: [1, 2, 2, 3, 4, 4]
 Output: [1, 2, 3, 4]
=================================== */

const RemoveDuplicates = arr => {

    let res = arr.sort(function(a,b){return a-b});
    console.log(res);
    let output = [arr[0]];

    let j = 0;
    for(let i = 0; i<res.length; i++){
        if(output[j] != res[i]){
            output.push(res[i]);
            j++;
        }
    }
    return output;
}








/* ===================================
 Problem 6: Sum of All Numbers in an Array

 Example:
 Input: [1, 2, 3, 4]
 Output: 10
=================================== */

const SumArray = arr => {
    let sum = 0;
    for(let value of arr) {
        sum+= value;
    }
    return sum;
}









/* ===================================
 Problem 7: Find Even Numbers in an Array

 Example:
 Input: [1, 2, 3, 4, 5, 6]
 Output: [2, 4, 6]
=================================== */

const FindEvenNumber = arr => {
    let res = [];
    for(let value of arr){
        if(value % 2 === 0){
            res.push(value);
        }
    }
    
    return res;
}






/* ===================================
 Problem 8: Capitalize First Letter of Each Word

 Example:
 Input: "hello world"
 Output: "Hello World"
=================================== */


/* ===================================
 Problem 9: Find the Factorial of a Number

 Example:
 Input: 5
 Output: 120
=================================== */

const Fact = num => {
    let res = 1;
    for (let i = 1; i<= num; i++){
        res *= i;
    }

    return res;
}







/* ===================================
 Problem 10: PingPong Challenge

 Rules:
 • Print numbers from 1 to 20.
 • For multiples of 3, print "Ping".
 • For multiples of 5, print "Pong".
 • For multiples of both 3 and 5, print "PingPong".
 • Otherwise, print the number itself.

 Example Output:
 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …
=================================== */


const PingPongChallenge = () => {
    for(let i  = 1; i<= 20  ; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("PingPong, ");
            } else if (i % 3 === 0) {
                console.log("Ping, ");
            } else if (i % 5 === 0) {
                console.log("Pong, ")
            } else {
                console.log(i + ", ")
            }
            
    
    }
}

// PingPongChallenge(); 