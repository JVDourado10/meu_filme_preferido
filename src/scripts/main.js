botao = document.querySelector('.personagens__content__button')

botao.addEventListener('click', function(e) {
  e.preventDefault()
  personagens1 = document.querySelectorAll('.personagens__content__actor')
  personagens2 = document.querySelectorAll('.personagens__content__actor--light')

  console.log(personagens2)


  if(botao.innerHTML == 'Mostrar Mais') {
    botao.innerHTML = 'Mostrar Menos'
    for(let i=0 ; i<personagens1.length; i++) {
      personagens1[i].classList.add("show")
    }
    for(let i=0 ; i<personagens2.length; i++) {
      personagens2[i].classList.add("show")
    }
  }
  else {
    botao.innerHTML = 'Mostrar Mais'
    for(let i=0 ; i<personagens1.length; i++) {
      personagens1[i].classList.remove("show")
    }
    for(let i=0 ; i<personagens2.length; i++) {
      personagens2[i].classList.remove("show")
    }
  }
})