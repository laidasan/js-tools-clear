/**
 * @author samura
 * @description dev js , you can try your tools here
*/


/**
 * @funciton 
 * @description imageReader
*/

import { readPhoto } from 'file/imageFile.js'
// import { required } from 'source/validator/validator.js'
import Vue from 'vue'
import App from './App.vue'
// import App from './validator/example1/App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
const vueExtension = Vue => {
  Vue.mixin({
    // beforeCreate() {
    //   const options = this.$options
    //   if(!options.computed) {
    //     options.computed = {}
    //   }
    //   if(options.computed.$myEx) return
    //   options.computed.$myEx = function() {
    //     return {
    //       author: 'Samura'
    //     }
    //   }
    // },
    beforeCreate() {
      const options = this.$options
      if(!options.computed) { options.computed = {} }
      options.computed.$name = function() { 
        return 'samura author'
      }
    },
    mounted() {
      let option = this.$options.myOptions
      // console.log(this.$options)
      // console.log(this.$options)
      if(option) {
        // console.log(option)
      }
    }
  })
}
Vue.use(vueExtension)
// console.log('origin',Vue.$options)

new Vue({
  mounted() {
    console.log(this.$options)
  },
  render: (h) => h(App)
}).$mount('#app')

const $fileInput = document.querySelector('#UploadImage')
const $img = document.querySelector('#preview')
$fileInput.addEventListener('change',function(e) {
  const { target : { files , value } , type } = e
  console.log(files , type , value )
  readPhoto(files[0])
    .then(({ base64 , imageMetadata , kb }) => {
      $img.src = base64
      console.log(kb)
      console.log(imageMetadata)
    })
    .catch(err => {
      console.log(err)
    })
})




// const Test = Vue.extend({
//   data() {
//     return {
//       test: true
//     }
//   }
// })


// Test.mixin({
//   data() {
//     return {
//       mixin: true
//     }
//   }
// })



// const TestTT = Test.extend({
//   data() {
//     return {
//       TT: true
//     }
//   }
// })


// console.log(new Test({
//   beforeCreate() {
//     console.log('Test')
//   },
//   created() {
//     console.log(this.test)
//     console.warn(this.mixin)
//   }
// }))
// console.log(new TestTT({
//   beforeCreate() {
//     console.log('TestTT')
//   },
//   created() {
//     console.log(this.TT)
//     console.warn(this.mixin)
//     console.log(this.$name)
//   }
// }))
// const restFn = function(...rest) {
//   console.log(rest)
// }

// restFn(10,20,30)
// restFn([10,20,30])

// const ary = [10,20,30]
// const isArray = Array.isArray(ary)
// console.log(isArray)
// console.log([...(isArray) ? ary : []])




// const isNil = (value) => value !== null && value !== undefined
// const isString = (value) => typeof value === 'string'

// const required = value => {
//   return value && isNil(value) && isString(value)
// }

// const config = [
//   {rule: 'required',validate: required },
//   {rule: 'spaceCharacter',validate: required }
// ]

// const configList = config.reduce((previous,current) => {
//   return {
//     ...previous,
//     [current.rule]: current['validate']
//   }
// },{})

// console.log(configList)




// // 規則
// export const required = value => Boolean(value) && !isNil(value) && isString(value)


// // 依照 config 取得驗證的創造器
// const createGetFunctionByConfigList = configPropsName => configList =>
//   (configList || []).reduce((previousValue, currentValue) => {
//     return {
//        ...previousValue,
//       [currentValue.rule]: currentValue[configPropsName]
//     }
//   }, {})

// // 利用取得驗證的創造器製造一個取得 驗證 function 的 methods
// export const getConfigValidates = createGetFunctionByConfigList('validate')
// // [currentValue.rule]: currentValue['validate']

// export const getConfigMessage = createGetFunctionByConfigList('message')
// // [currentValue.rule]: currentValue['message']

// export const getErrorOrder = configList => (configList || []).map(item => item.rule)




// // 依照 config 取得所有驗證器與訊息
// export const createValidators = config => {
//   const validator = {
//     validates: getConfigValidates(config), // 驗證方法
//     messages: getConfigMessage(config), // 錯誤訊息對應表


//     messageOrder: getErrorOrder(config) // 錯誤訊息權重順序
//   }
  
//   return defineEnum({
//     ...validator,
//     findFirstError: findValidatorFieldError(validator.messageOrder)(validator.messages)
//   })
// }

// // config
// const validatorConfig = [
//     { rule: 'required', validate: required, message: tv('title.required') },
//     { rule: 'spaceCharacter', validate: spaceCharacter, message: tv('title.spacing') },
//     { rule: 'wordsLimit', validate: wordsLimit(maxWords), message: tv('title.maxLength', { max: maxWords }) },
//   ]


// // 產出
//   {
//       validate: {
//           required: function,
//           spaceCharacter: function,
//           wordsLimit: function
//       },
//       messages: {
//           required: meesgage,
//           spaceCharacter: message,
//           wordsLimit: message 
//       },
//       messageOrder : [
//           'required',
//           'spaceCharacter',
//           'wordsLimit'
//       ]
//   }
