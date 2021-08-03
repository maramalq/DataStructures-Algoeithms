function LongestWord(sen) { 
    sen = sen.replace(/[^a-zA-Z ]/ig,'');

    words = sen.split(" ");
    longestWord = words[0];

    for (i = 0; i < words.length; i ++) {
        if (words[i].length > longestWord.length) {
        longestWord = words[i]	;
        }
    }

    return longestWord;
}

// keep this function call here 
console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));