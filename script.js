function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // } FAZ A MESMA COISA QUE O TOGGLE

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem Maik Brito sorrindo, usando óculos escuros e jaqueta preta, barba e fundo colorido"
    )
  } else {
    //se tiver sem light mode, manter a imagem norma.
    img.setAttribute("src", "./assets/avatar.png")
  }
}
