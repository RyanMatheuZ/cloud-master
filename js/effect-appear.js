/*
  !! THIS IS NOT a LIBRARY or FRAMEWORK !!

  This file (effect-appear.js), along with its complementation (effect-appear.css), 
  was developed to apply effects to some elements and can be used in future 
  implementations on the site.

  * HOW TO APPLY?
  Just apply the class corresponding to the desired effect along with your CSS rules, 
  in one or more elements, considering your type of trigger, by SCREEN LOADING or SCROLL BAR.

  * EXAMPLES WITH APPEAR-SLIP:
  load--appear-slip: triggered the instant the screen is loaded.
  scroll--appear-slip: triggered the instant the element is reached through the scroll bar.
*/

addEventListener('load', () => {
    const loadAppearFall = document.querySelectorAll('.load--appear-fall')
    const loadAppearGrow = document.querySelectorAll('.load--appear-grow')
    const loadAppearSlip= document.querySelectorAll('.load--appear-slip')

    loadAppearFall.forEach(appearFall => {
        appearFall.classList.add('effect--appear-fall')
    })

    loadAppearGrow.forEach(appearGrow => {
        appearGrow.classList.add('effect--appear-grow')
    })

    loadAppearSlip.forEach(appearSlip => {
        appearSlip.classList.add('effect--appear-slip')
    })
})

addEventListener('scroll', () => {
    const scrollAppearFall = document.querySelectorAll(".scroll--appear-fall")
    const scrollAppearGrow = document.querySelectorAll('.scroll--appear-grow')
    const scrollAppearSlip = document.querySelectorAll('.scroll--appear-slip')

    scrollAppearFall.forEach(appearFall => {
        if (appearFall.getBoundingClientRect().bottom < window.innerHeight) {
            appearFall.classList.add('effect--appear-fall')
        }
    })

    scrollAppearGrow.forEach(appearGrow => {
        if (appearGrow.getBoundingClientRect().bottom < window.innerHeight) {
            appearGrow.classList.add('effect--appear-grow')
        }
    })

    scrollAppearSlip.forEach(appearSlip => {
        if (appearSlip.getBoundingClientRect().bottom < window.innerHeight) {
            appearSlip.classList.add('effect--appear-slip')
        }
    })
})