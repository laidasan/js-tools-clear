/** 
 * @author samura
 * @function
 * @description img loader tools , img loader 完才放 src 上去
*/


// 需要搭配些 css
import '../../example/imgLoader/main.scss'


/** 
 * @function 
 * @description load src
 */
function loadSrc(src) {
  const NewImg = new Image()
  return new Promise((resolve,reject) => {
    NewImg.onload = function() {
      resolve({src,message: 'success to load img'})
    }
    NewImg.onerror = function() {
      reject({src,message: 'fail to laod img'})
    }

    NewImg.src = src
  })
}

/** 
 * @function 
 * @description img loader
 */
const loadImg = (imgEl) => (src) => {
  loadSrc(src)
    .then(imgEl.src = src)
    .catch(err => {
      imgEl.src = err.src
      console.error(err.message)
    })
}


/** 
 * @instance 
 * @description 獨體模式之實體參照
 */
let instance = null


/** 
 * @instance 
 * @description 取得實體
 */
function getInstance() {
  if(instance === null) {
    instance = {
      loadSrc,
      loadImg
    }
  }

  return instance
}
 

export { loadImg , loadSrc ,getInstance }
export default { loadImg , loadSrc , getInstance }