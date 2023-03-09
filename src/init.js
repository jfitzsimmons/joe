function smoothScroll(e) {
  e.preventDefault()
  let target = document.getElementById(this.getAttribute('data-href'))
  let offset = target.offsetTop - window.innerHeight * 0.005
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  })
}

let links = document.querySelectorAll('[data-href]')
links.forEach((l) => l.addEventListener('click', smoothScroll))

let liEls = document.getElementsByClassName('gallery__item')
let index = 0
window.show = function (increase) {
  index = index + increase
  index = Math.min(Math.max(index, 0), liEls.length - 1)
  liEls[index].scrollIntoView({ behavior: 'smooth' })
}
