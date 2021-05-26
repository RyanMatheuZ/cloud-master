const form = document.querySelector('#form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.querySelector('#tname')
    const surname = document.querySelector('#tsurname')
    const email = document.querySelector('#temail')
    const phone = document.querySelector('#tphone')
    const department = document.querySelector('#department')
    const message = document.querySelector('#message')

    const result = document.querySelector('#result')
    
    result.innerHTML = ''
    name.classList.remove('field--error')
    surname.classList.remove('field--error') 
    email.classList.remove('field--error')
    phone.classList.remove('field--error')
    
    document.querySelector('select').style.borderColor = '#071A52'
    document.querySelector('textarea').style.borderColor = '#071A52'

    if (!name.value || !isNaN(name.value)) {
        result.innerHTML = '<p class="message--error">Informe seu nome!</p>'
        name.classList.add('field--error')
        name.focus()
    } else if (!surname.value || !isNaN(surname.value)) {
        result.innerHTML = '<p class="message--error">Informe seu sobrenome!</p>'
        surname.classList.add('field--error')
        surname.focus()
    } else if (!email.value || !isNaN(email.value)) {
        result.innerHTML = '<p class="message--error">Informe seu email!</p>'
        email.classList.add('field--error')
        email.focus()
    } else if (!phone.value || isNaN(phone.value) || phone.value.length !== 11 ) {
        result.innerHTML = '<p class="message--error">Informe seu contato!</p>'
        phone.classList.add('field--error')
        phone.focus()
    } else if (!department.value || !isNaN(department.value)) {
        result.innerHTML = '<p class="message--error">Escolha um departamento!</p>'
        document.querySelector('select').style.borderColor = '#D10'
    } else if (!message.value || !isNaN(message.value)) {
        result.innerHTML = '<p class="message--error">Informe sua mensagem!</p>'
        document.querySelector('textarea').style.borderColor = '#D10'
        message.focus()
    } else {
        result.innerHTML = '<p class="message--confirm">Mensagem enviada!</p>'
    }
})