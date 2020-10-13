export const defineNoEnum = object => {
  let result = {}
  try {
    Object.keys(object).forEach(key => {
      Object.defineProperty(result,key,{
        value: object[key],
        writable: false,
        enumerable: false,
        configurable: false
      })
    })
    return Object.freeze(result)
  } catch(err){
    console.log(err)
    return object
  }
}