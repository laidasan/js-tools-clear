import { defineNoEnum } from '../defineEnum/defineNoEnum'
import { extensionObj } from './util.js'

/**
 * @author samura
 * @param {function} callback callback function
 * @desc 擴充物件的 map 方法
 */
export const map = function (callback,thisArg) {
  const context = thisArg || this
  const result = extensionObj({})
  
  for(const key in this) {
    result[key] = callback.call(context,this[key])
  }

  return result
}

export const extensionObjBase = defineNoEnum({
  map
})

