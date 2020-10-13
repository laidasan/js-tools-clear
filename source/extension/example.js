import { extensionObj } from './util.js'



// example
const hasMapObj = extensionObj({
  a: 1,
  b: 2,
  c: 3
})

let result = hasMapObj.map((prop) => {
  return prop
})
console.log(result)
