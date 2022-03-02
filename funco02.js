function asteriscos(linhas) {
  for (let linha = 1; linha <= linhas; linha++) {
    let asterisco = ''
    for (let i = 0; i < linha; i++) {
      asterisco += '*'
    }
    console.log(asterisco)
  }
}

asteriscos(6)
