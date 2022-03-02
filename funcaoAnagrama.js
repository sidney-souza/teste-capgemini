function anagramas(ps1, ps2) {
  let eAnagrama = true
  let numCar, posicao2

  let ps1 = prompt('Escreva primeira palavra!')
  let ps2 = prompt('Escreva segunda palavra!')

  if (ps1.length != ps2.length) {
    eAnagrama = false
  } else {
    numCar = 0
    while (eAnagrama == true && numCar < ps1.length) {
      posicao2 = ps2.indexOf(ps1[numCar])
      if (posicao2 == -1) {
        eAnagrama = false
      } else {
        ps2.split(posicao2)
      }
      numCar++
    }
  }
  if (eAnagrama) {
    let res = 'È um anagrama'
  } else {
    let res = 'Não é um angrama'
  }
  return res
}

anagramas(amor, roma)
