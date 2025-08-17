

// input word;

// counter = 0

// if Vowels == "a" || "e" || "i" || "o" || "u"
    // counter = counter + 1

// return counter


let str = "programming";
let counter = 0;


const CountVowels = (str) => {

    for(let i = 0; i< str.length; i++){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        counter++;
    }
    }


    return counter;
}

console.log(CountVowels(str));