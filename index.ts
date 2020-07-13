const MAXIMUM_COLOR_RANGE = parseInt('0xFFFFFF')

export default function randomHexColor(): String {
  return `#${('000000' + Math.floor(Math.random() * MAXIMUM_COLOR_RANGE)).slice(-6)}`
}
