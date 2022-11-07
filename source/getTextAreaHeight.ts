export interface GetTextAreaHeight {
  (rows: number, el: HTMLTextAreaElement): number
}

export const getTextAreaHeight: GetTextAreaHeight = (rows, el) => {
  const cs = window.getComputedStyle(el)

  const lh = cs.lineHeight === 'normal'
    ? parseFloat(cs.fontSize) * 1.2
    : parseFloat(cs.lineHeight)

  const rowHeight = rows === 0
    ? 0
    : lh * rows +
      parseFloat(cs.borderBottomWidth) +
      parseFloat(cs.borderTopWidth) +
      parseFloat(cs.paddingBottom) +
      parseFloat(cs.paddingTop)

  const scrollHeight =
    el.scrollHeight +
    parseFloat(cs.borderBottomWidth) +
    parseFloat(cs.borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}
