export const omit = (keys, obj) =>
  Object.keys(obj).reduce((acc, key) => {
    if (keys.indexOf(key) === -1 && obj[key] !== undefined) {
      acc[key] = obj[key]
      return acc
    }
    return acc
  }, {})

export const getComputedRowHeight = (node, rows) => {
  if (!rows) {
    return 0
  }

  const { lineHeight, paddingBottom, paddingTop } = window.getComputedStyle(node)

  return parseInt(lineHeight) *
    parseInt(rows) +
    parseInt(paddingBottom) +
    parseInt(paddingTop)
}

export const getHeight = (node, rows) =>
  Math.max(
    getComputedRowHeight(node, rows),
    node.scrollHeight
  )
