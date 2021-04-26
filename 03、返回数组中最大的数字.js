/**
 * 返回一个数组，它要由给出的所有子数组中的最大值组成
*/

/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function largestOfFour(arr) {
    return arr.map(item => Math.max(...item))
}