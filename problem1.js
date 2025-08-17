
// let word = "Hello";
// let reverse = "";

// for (let i = 0; i < word.length; i++){
//     reverse += word[word.length - i - 1]
// }

// console.log("Output: ",reverse);



let str = "Hello";
const ReverseString = (s) => {
    let r = "";
    for (let i = 0; i< s.length; i++){
        r += s[s.length -i -1];
    }
    return r;
} 

console.log("Reverse String: ", ReverseString(str));