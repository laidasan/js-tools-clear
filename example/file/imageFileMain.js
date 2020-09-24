import { readPhoto } from 'source/file/imageFile.js'

const $fileInput = document.querySelector('#UploadImage')
const $img = document.querySelector('#preview')
$fileInput.addEventListener('change',function(e) {
  const { target : { files , value } , type } = e
  console.log(files , type , value )
  readPhoto(files[0])
    .then(({ base64 , kb }) => {
      $img.src = base64
      console.log(kb)
    })
    .catch(err => {
      console.log(err)
    })
})
