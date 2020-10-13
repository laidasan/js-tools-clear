import { extensionObjBase }  from './object.js'

/**
 * @author samura
 * @param {object} target 
 * @desc 產生 Object.create 所需要加在物件上的屬性物件
 * @use Object.create(prototype,createPropObj({}))
 */

export const createPropObj = (target = {}) => {
  let targetPropsObj = {}
  for(const key in target) {
    targetPropsObj[key] = {
      value: target[key],
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
  return targetPropsObj
}

/**
 * @author samura
 * @function
 * @param {object} extensionObjBase 需要擴充的功能
 * @param {object} target 要擴充的物件
 * @desc 擴充物件功能
 */

export const extensionObjectFn = extensionObjBase => target => {
  let targetPropsObj = createPropObj(target)
  
  return Object.create(extensionObjBase,targetPropsObj)
}


/**
 * @author samura
 * @function
 * @desc 擴充物件的方法
 */
export const extensionObj = extensionObjectFn(extensionObjBase)
