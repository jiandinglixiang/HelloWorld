export default (function () {
  function dog_C (ARGS) {
    if (Object.prototype.toString.call(ARGS) !== '[object Arguments]') {
      throw new Error(`\n预期类型[object Arguments] \n收到类型 ${ Object.prototype.toString.call(ARGS) }`)
    }

    function objString (obj, isRequirement) {
      const objType = Object.prototype.toString.call(obj)
      let sing
      if (objType === '[object Array]') {
        let singArray = []
        for (let i in obj) singArray.push(objString(obj[i]))
        sing = `[${ singArray.join(',') }]`
      } else if (objType === '[object Object]') {
        let singObj = []
        for (let i in obj) singObj.push(`${ i }:${ objString(obj[i]) }`)
        sing = `{${ singObj.join(',') }}`
      } else if (isRequirement && objType === `[object Function]`) {
        sing = `${ obj.name || 'function' }`
      } else {
        sing = String(obj)
      }
      return sing
    }

    function error (term, value, type) {
      if (term) return
      throw new Error(`\n参数预期=${ objString(type, true) } \n参数收到=${ objString(value) }`)
    }

    function objectVerify (value, type) {
      if (value === undefined) return false

      for (let i in type) {
        if (type[i] === null) {
          // if (value[i] === undefined) return
          // if (value[i] !== type[i]) return
        } else if (type[i] === undefined) {
          return false
        } else {
          error(verify(value[i], type[i]), value[i], type[i])
        }
      }
      return true
    }

    function funcVerify (value, type) {
      if (!type.name || type.name === 'check') return type(value)
      else if (type.name === 'Boolean') return typeof value === 'boolean'
      else if (type.name === 'String') return typeof value === 'string'
      else if (type.name === 'Number') return typeof value === 'number'
      else if (type.name === 'Object') return typeof value === 'object'
      else if (type.name === 'Function') return typeof value === 'function'
      else if (type.name === 'Symbol') return typeof value === 'symbol'
      else if (type.name === 'Array') return Object.prototype.toString.call(value) === '[object Array]'
      else if (type.name === 'Date') return Object.prototype.toString.call(value) === '[object Date]'
      else {
        return value && value.name === type.name
      }
      // 如果都是函数的话就判断函数名字
    }

    function verify (value, type) {
      switch (typeof type) {
        case 'object':
          return objectVerify(value, type)
        case 'function':
          return funcVerify(value, type)
        case 'number':
        case 'string':
        case 'boolean':
        case 'undefined':
        default:
          return type === value
      }
    }

    const verification = function () {
      for (let i in arguments) {
        error(verify(ARGS[i], arguments[i]), ARGS[i], arguments[i])
      }
      return verification
    }
    return verification
  }

  Function.prototype.dog_C = dog_C
  return dog_C
})()
