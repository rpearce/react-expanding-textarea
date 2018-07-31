export const omit = (keys, obj) =>
  Object.keys(obj).reduce((acc, key) => {
    if (keys.indexOf(key) === -1 && obj[key] !== undefined) {
      acc[key] = obj[key]
      return acc
    }
    return acc
  }, {})
