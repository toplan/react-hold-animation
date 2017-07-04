
export const isString = value => typeof value === 'string'

export const normalizeAnimation = (props) => {
  let result = null
  if (!props || typeof props !== 'object') {
    return result
  }
  Object.keys(props).forEach((key) => {
    if (key && key.length > 0) {
      const name = key[0].toUpperCase() + key.slice(1)
      result = result || {}
      result[`animation${name}`] = props[key]
    }
  })
  return result
}
