const [MIN_LIMIT, MAX_LIMIT] = [2, 50];

function algorithm(str) {
    const resultArray = [];
    const arrOfString = str.match(/\w+/g) || [];

    if (arrOfString.length < MIN_LIMIT || arrOfString.length > MAX_LIMIT) {
        throw new Error("The limit of words reached!");
    }

    if (!/\w\.$/.test(str)) {
        throw new Error("The last word does not ending with dot!"); // заканчивается на точку 100%
    }

    const firstWord = arrOfString[0]; // отримали перше слово

    for (let key of arrOfString) {

        if (key.length > 8) {
            throw new Error("The limit of word symbols reached!"); // дилна слова больше 8
        }

        let lastCharacter = key.charAt(key.length - 1);
        if (!key.includes(firstWord) && key.indexOf(lastCharacter) !== key.length - 1) {
            resultArray.push(key);
        }
    }
    return resultArray;
}