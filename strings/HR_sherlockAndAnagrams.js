// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
    let allSubStrings = new Map();

    let substrLetters;

    for (let i = 0; i < s.length; i++) {
        substrLetters = [s[i]];

        for (let j = i; j < s.length; j++) {
            if (i !== j) {
                substrLetters.push(s[j]);
            }

            let sortedSubstr = [...substrLetters].sort().join("");

            if (allSubStrings.has(sortedSubstr)) {
                allSubStrings.set(sortedSubstr, allSubStrings.get(sortedSubstr) + 1);
            } else {
                allSubStrings.set(sortedSubstr, 1);
            }

        }
    }

    let countOfAnagrams = 0;

    allSubStrings.forEach((value) => {
        if (value > 1) {
            countOfAnagrams += value*(value-1)/2;
        }
      });

    return countOfAnagrams;
}
