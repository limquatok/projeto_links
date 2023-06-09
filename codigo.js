function teste() {
  let html = document.querySelector("html")
  //html.classList.toggle("light")
  let img = document.querySelector("img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/linux_black.png")
  } else {
    img.setAttribute("src", "assets/Tux.svg.png")
  }
}

document.querySelector("button").addEventListener("click", teste)
