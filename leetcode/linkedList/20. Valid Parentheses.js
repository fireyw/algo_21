//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let validMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let arrKey = [];
    if (s.length <= 1) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        let item = s.charAt(i)
        if (validMap[item]) { //키만 넣기
            arrKey.push(item)
        } else {
            let pop = arrKey.pop()
            // console.log('pop:', pop, 'item: ',item, 'validMap[item]: ', validMap[pop]);

            if (item != validMap[pop]) return false
        }
    }

    return !arrKey.length
};

let s = "(("
console.log(isValid(s));
