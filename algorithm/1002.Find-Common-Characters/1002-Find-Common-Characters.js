/**
 * @param {string[]} A
 * @return {string[]}
 * 
 */
var commonChars = function (A) {
    let arr = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let arr1 = A[i].split('');
        let arr2 = [];
        arr1.forEach((str) => {
            let num = arr.indexOf(str);
            if (num >= 0) {
                arr2.push(str);
                arr.splice(num, 1);
            }
        })
        arr = arr2;
    }
    return arr;
};
console.log(commonChars(["bella", "label", "roller"]))