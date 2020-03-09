module.exports = function check(str, bracketsConfig) {
    let array = [].concat(...bracketsConfig);

    let string = str.split('');
    for (let k = 0 ; k < 2 ; k++)
        for (let j = 0 ; j < string.length ; j++){
            if (string[j+1] == array[array.indexOf(string[j]) + 1]){
                string.splice(j, 2);
                j = 0;
            }
            if (string.join('') == bracketsConfig[0].join('')){
                return true;
            }
        }
    return string.length === 0;
}
