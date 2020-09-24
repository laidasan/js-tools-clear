import EXIF from 'exif-js'
import numeral from 'numeral'
// console.log(EXIF.getData)

/**
 * @package exif-js
 * @link https://github.com/exif-js/exif-js
 */

/**
 * @package numeral
 * @link http://numeraljs.com/
 */


const { FileReader } = window

const useFileReader = (format) => (file) => {
  let reader = new FileReader()
  console.log(reader)
  //   console.log(format)
  console.log(file)

  return new Promise((resolve,reject) => {

    reader.onload = function(e) {
      try {
        console.log(e)
        EXIF.getData(file,() => {
          const {type,size,name} = file
          const { target , target : { result:base64 } } = e
          console.log(type,size,name)
          //   console.log(base64)
          console.log(target)

          resolve({
            type,
            size,
            kb: numeral(size).format(format),
            name,
            base64,
            base64body: base64.replace(/data:image\/(jpg|png|jepg|gif);base64,/,'')
          })
          resolve('test')
          
        })

      } catch (err) {
        console.log(err)
        reject(new Error('read error in useFileReader'))
      } finally {
        reader = null
      }
    }

    reader.onerror = function() {
      reject(new Error('read error in useFileReader'))
    }

    reader.readAsDataURL(file)
  })

}

const readImg = useFileReader('0.0 b')

const useImgLoad = (readImg) => (file) => {
  let image = new Image()
  let metadata = {}
  const {name = ''} = file
  return new Promise((resolve,reject) => {
    image.onload = function() {
      try {
        resolve({
          ...metadata,
          height: image.height,
          width: image.width
        })
      } catch(err) {
        reject(new Error(`${name } nload error! at image.onload of useImageLoad`))
      } finally {
        image.onload = null
        image = null
      }
    }

    image.onerror = function() {
      throw(new Error(`${ name } Image load error! at  image.onerror of useImageLoad` ))
    }

    readImg(file).then(photoMetadata => {
      metadata = {
        ...metadata,
        ...photoMetadata
      }
      

      image.src = photoMetadata.base64
    })
    
  })
    
}


/**
 * @function
 * @desc readPhoto 與 readImg 差別在 , readPhoto 有 readImg 得出來的資訊外
 * @desc 還多使用了 Image 來去得 img 的寬與高
 */
const readPhoto = useImgLoad(readImg)




export { readImg ,readPhoto }

