function getDigitSum(n) {
  let sum = 0
  while (n >= 1) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

function getZizidanggunForDigit(n, digit, replacement) {
  let result = '';
  if(n.toString().includes(digit)) {
    result += replacement
  }
  if(getDigitSum(n) === digit) {
    result += replacement
  }
  if(n % digit === 0) {
    result += replacement
  }
  return result
}


function zizidanggun(n) {
  if(n === 0) {
    return n
  }
  const result = getZizidanggunForDigit(n, 3, 'zizi') + 
    getZizidanggunForDigit(n, 5, 'dang') + 
    getZizidanggunForDigit(n, 7, 'gun')
  if(result === '') {
    return n
  }
  return result
}

function playZizidanggunUntil(n) {
  const result = []

  for (let i = 0; i <= n; i++) {
    result.push(zizidanggun(i))
  }

  return result
}

console.log(playZizidanggunUntil(15))
