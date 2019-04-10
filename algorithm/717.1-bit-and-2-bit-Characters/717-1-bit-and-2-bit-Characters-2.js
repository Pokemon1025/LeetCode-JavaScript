/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let isOneBit = true,
        cur = 0,
        len = bits.length;
    
    while(cur<len){
        if(bits[cur]==1){
            cur += 2;
            isOneBit = false;         
        }else{
            cur += 1;
            isOneBit = true;
        }
    }
    return isOneBit;
};