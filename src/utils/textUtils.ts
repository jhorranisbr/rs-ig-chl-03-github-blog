export function clampText(text: string, length = 50) {
  if (!text) {
    return text
  }
  const textArr = text.split(' ')
  const newText = textArr
    .map((string, index) => {
      return index < length ? string : ''
    })
    .filter((string) => {
      return string !== undefined
    })
    .join(' ')
  return `${newText}...`
}
