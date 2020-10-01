<script>
import {defineEnum} from 'define/defineEnum.js'
export const INPUT_TYPE = defineEnum({
  TEXT: 'text',
  CHECKBOX: 'checkbox',
  SEARCH: 'search',
})

const inputTypeArray = [
  INPUT_TYPE.TEXT,
  INPUT_TYPE.CHECKBOX,
  INPUT_TYPE.SEARCH
]

const setDefInputType = function(type) {
  return inputTypeArray.indexOf(type) !== -1 ? type : 'text'
}



export default {
  inheritAttrs: false,
  model: {
    prop: 'localValue',
    event: 'inputvalue'
  },
  props: {
    localValue: {
      type: String,
      default: ''
    }
  },
  mounted(){
    console.log(this.localValue)
  },
  computed: {
    value() { 
      return this.localValue
    }
  },
  methods: {
    onInput(event) {
      console.log(this.$v)
      this.$emit('inputvalue',event.target.value)
    }
  },
  render: function (creatElement) {
    const { $attrs:attrs ,$listeners:listeners} = this
    attrs.type = setDefInputType(attrs.type)

    return creatElement('input',{
      attrs: {
        ...attrs,
        value: this.value
      },
      on: {
        ...listeners,
        input: this.onInput
      }
    })
  }
}
</script>
