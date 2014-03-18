module.exports = defineGetter

function defineGetter(obj, prop, getter){
  Object.defineProperty(obj, prop, {
    get: getter
  })
}