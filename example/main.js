/**
 * @author samura
 * @description dev js , you can try your tools here
*/


/**
 * @funciton 
 * @description imageReader
*/

import { readPhoto } from 'source/file/imageFile.js'

const $fileInput = document.querySelector('#UploadImage')
const $img = document.querySelector('#preview')
$fileInput.addEventListener('change',function(e) {
  const { target : { files , value } , type } = e
  console.log(files , type , value )
  readPhoto(files[0])
    .then(({ base64 , base64body , kb }) => {
      $img.src = base64
      console.log(kb)
    })
    .catch(err => {
      console.log(err)
    })
})
