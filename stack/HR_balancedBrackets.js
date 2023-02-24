
function isEmpty(arr) {
    return arr.length === 0;
}

function pick(arr) {
    return arr[arr.length - 1];
}

function isBalanced(s) {
    const bracketsStack = [];

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let currentBracket of s) {
        let isOpeningBracket = false;

        for (let openingBracket in brackets) {
            if (currentBracket === openingBracket) {
                isOpeningBracket = true;
                break;
            }
        }

        if (isOpeningBracket) {
            bracketsStack.push(currentBracket);
        } else {
            if (isEmpty(bracketsStack)) return 'NO';

            if (brackets[pick(bracketsStack)] === currentBracket) {
                bracketsStack.pop();
            } else {
                return 'NO';
            }
        }
    }

    return isEmpty(bracketsStack) ? 'YES' : 'NO';
}
