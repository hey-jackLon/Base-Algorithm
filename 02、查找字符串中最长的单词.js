/**
 * 算法基础：查找字符串中最长的单词
 * 返回给出的句子中最长的单词的长度。
 * 你的返回应该是一个数字。
 */

/**
 * 将字符串转换为单词数组。声明一个变量来跟踪最大长度，并从0到单词数组的长度进行循环。
 * 然后通过比较当前单词和前一个单词来检查最长的单词，并存储新的最长单词。在循环结束时，只返回变量maxLength的number值
 * @param { String } str 
 * @returns { Number }
 */
function findLongestWordLength0(str) {
    const strArr = str.split(' ');
    let len = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > len) {
            len = strArr[i].length
        }
    }
    return len;
}

/**
 * 通过比较累计器和每个单词长度，如果单词的长度大于累计器的值则修改累计器的值
 * @param { String } s 
 * @returns { Number }
 */
function findLongestWordLength1(s) {
    return s.split(' ')
        .reduce(function (longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}

/**
 * 将字符串分割，得出分割后字符串长度的数组，通过数学方法、解构赋值得出最大的值
 * @param {Aray} str 
 * @returns 
 */
function findLongestWordLength2(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}