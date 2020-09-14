/**
 * @author samura
 * @function
 * @description proxy remote
 * @param      {object}   object
 */


// import { defineEnum } from '../defineEnum/defineEnum'
/** 
 * @instance
*/
let instance = null

/** 
 * @instance
 * @description 取得實體
*/

function getInstance() {
  if(instance === null) {
    instance = {
    }
  }
  return instance
}


export default getInstance