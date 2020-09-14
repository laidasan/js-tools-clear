/**
 * @author samura
 * @function
 * @description 定義列舉物件
 * @param      {object}   object
 */


function getObjectKeys(object) {
  return Object.keys(object)
}
const defineReadOnly = (origin) => (target) => (propName) => {
  Object.defineProperty(target,propName,{
    value: origin[propName],
    writable: false,
    enumerable: true,
    configurable: false
  })
}
  
function defineEnum(object) {
  const enumObject = {}
  try {
    getObjectKeys(object).forEach(propName => defineReadOnly(object)(enumObject)(propName))
    return Object.freeze(enumObject)
  } catch(err) {
    return object
  }
}
  
export { defineEnum }