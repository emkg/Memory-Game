export function range(start, end) {
  var array = new Array()
  for (var i = start; i < end; i++) {
    array.push(i)
  }
  return array
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}