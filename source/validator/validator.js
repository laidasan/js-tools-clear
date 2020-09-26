import { isHalfWidth } from 'validator'
import { wordBreakCount } from 'source/string/string.js'
import { defineEnum } from 'define/defineEnum.js'

/**
 * @function 
 * @desc 是否為 undefined or null
 */
export const isNil = value => value === null && value === undefined

/**
 * @function 
 * @desc 是不是字串
 */
export const isString = value => typeof value === 'string'

/**
 * @function 
 * @desc 必填
 */
export const required = value => Boolean(value) && !isNil(value) && isString(value)

/**
 * @function 
 * @desc 不能空白字串 , undefined || null || '' 會通過
 */
export const spaceCharacter = value => !(value) || value.trim()

/**
 * @function 
 * @desc 是否為半形字檢查 , undefined || null || '' 會通過
 */
export const halfWidth = value => !(value) || isHalfWidth(value)

export const useMatchesRegex = regex => value => !(value) || regex.test(value)

/**
 * @function 
 * @desc 超過字數檢查
 * @param {number} maxCount , 最大字數
 * @example maxFourtyFive = wordsLimit(45)
 */
export const wordsLimit = maxCount => value => {
  return !(value) || wordBreakCount(value) <= maxCount 
}


/**
 * @function 
 * @desc 取得器 , 依照丟入的 configPropsName 取得 configList 中的某值
 * @param {string} configPropsName 想要取得的 propsName
 * @param {array} configList 設定 list 格式為 [{},{},{}]
 * @returns {object} 回傳物件 
 * @example 比如說丟入 propsName = 'validate' , configList = [rule:'required',validate: required function ]
 * @example 就會回傳 { required: required function }
 */
export const createGetFunctionFromConfigList = (configPropsName) => (configList = []) => (
  configList.reduce((previous,current) => {
    return {
      ...previous,
      [current['rule']]: current[configPropsName]
    }
  },{})
)

/**
 * @function 
 * @desc validate 取得器
 */
export const getConfigValidate = createGetFunctionFromConfigList('validate')

/**
 * @function 
 * @desc message 取得器
 */
export const getConfigMessages = createGetFunctionFromConfigList('message')


/**
 * @function 
 * @desc 錯誤權重取得器
 */
export const getErrorOrder = (configList = []) => configList.map(item => item.rule) 


export const createValidator = (configList) => {
  const validator = {
    validate: getConfigValidate(configList),
    messages: getConfigMessages(configList),
  }

  return defineEnum({
    ...validator
  })
}