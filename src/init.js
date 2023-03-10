function smoothScroll(e) {
  e.preventDefault()
  let target = document.getElementById(this.getAttribute('data-href'))
  let offset = target.offsetTop - window.innerHeight * 0.005
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  })
}

const links = document.querySelectorAll('[data-href]')
links.forEach((l) => l.addEventListener('click', smoothScroll))

var handler = function () {
  gallery_items.forEach((b) => {
    b.classList.remove('shrink_move', 'left', 'right')
  })
}

const gallery_items = document.querySelectorAll('.gallery__item')
gallery_items.forEach((b) => b.addEventListener('animationend', handler, false))

function show(e) {
  increase = parseInt(e.target.getAttribute('data-increase'))
  index = index + increase
  index = Math.min(Math.max(index, 0), gallery_items.length - 1)

  gallery_items.forEach((b) => {
    increase === 1
      ? b.classList.add('shrink_move', 'right')
      : b.classList.add('shrink_move', 'left')
    b.parentElement.classList.remove('active')
  })
  gallery_items[index].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
  })
  gallery_items[index].parentElement.classList.add('active')
}

let index = 0

const btns = document.querySelectorAll('.paging')
btns.forEach((b) => b.addEventListener('click', show, false))
