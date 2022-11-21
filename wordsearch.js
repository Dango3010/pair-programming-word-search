const wordSearch = (letters, word) => { 
    if(!letters.length) return false;
    
    const horizontalJoin = letters.map(ls => ls.join('')) //[ 'AWCFQUAL' ]
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const rows = letters.length //9
    const columns = letters[0].length //8
    let newArr = [];
    for (let i = 0; i < columns; i++) {
        newArr.push([]);
        for (let j = 0; j < rows; j++) {
            newArr[i].push(letters[j][i]); //['A', 'S', 'Y', 'H']
        }
    }
    for (element of newArr) {
        const letter = newArr.map(ls => ls.join(''));
        if (letter === word) return true;
    } 

    return false;
}
module.exports = wordSearch

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD')); //output: true