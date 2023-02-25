// https://www.hackerrank.com/challenges/simple-text-editor/problem

function processData(input) {
    const inputArray = input.split('\n');
    let result = "";
    let editingString = "";

    const opsStack = [];
    opsStack.push(editingString);

    const opsCount = Number(inputArray[0]);

    for (let i = 1; i <= opsCount; i++) {
        const [opsType, opsValue] = inputArray[i].split(' ');

        if (opsType === '1') {
            editingString += opsValue;

            opsStack.push(editingString);
        } else if (opsType === '2') {
            const newEditingStringLength =
                editingString.length - Number(opsValue);
            editingString = editingString.substr(0, newEditingStringLength);

            opsStack.push(editingString);
        } else if (opsType === '3') {
            result += editingString[Number(opsValue) - 1] + '\n';
        } else {
            opsStack.pop();
            editingString = opsStack.at(-1);
        }
    }

    console.log(result);
}