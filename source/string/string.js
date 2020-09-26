/**
 * @function
 * @desc 計算換行 （\r\n) (\n) (\r) 的次數 , 如果沒有則回傳 0
 * @param {string}  word 要檢測的字串
 */
export const lineBreakCount = word => {
  const breakCount = word.match(/(\r\n|\r|\n)/g)
  return ( breakCount && breakCount.length ) || 0
}

/**
 * @function 
 * @desc 計算字數 , 換行算兩個字
 * @param {string} word 要檢測的字串 
 */
const useWordBreakCount = lineBreakCount => word => ( word.length + lineBreakCount(word))

export const wordBreakCount = useWordBreakCount(lineBreakCount)
