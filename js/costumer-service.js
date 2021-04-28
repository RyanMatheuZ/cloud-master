function onSubmit(event) {
    event.preventDefault()

    const name = document.querySelector('#tname')
    const surname = document.querySelector('#tsurname')
    const email = document.querySelector('#temail')
    const phone = document.querySelector('#tphone')
    const department = document.querySelector('#department')
    const message = document.querySelector('#message')

    const result = document.querySelector('#result')

    result.innerHTML = ''
    name.className = ''
    surname.className = ''
    email.className = ''
    phone.className = ''
    department.className = ''
    message.className = ''

    if (!name.value || !isNaN(name.value)) {
        result.innerHTML = '<p class="message-error">Informe seu nome!</p>'
        name.className = 'field-error'
        name.focus()
    } else if (!surname.value || !isNaN(surname.value)) {
        result.innerHTML = '<p class="message-error">Informe seu sobrenome!</p>'
        surname.className = 'field-error'
        surname.focus()
    } else if (!email.value || !isNaN(email.value)) {
        result.innerHTML = '<p class="message-error">Informe seu email!</p>'
        email.className = 'field-error'
        email.focus()
    } else if (!phone.value || isNaN(phone.value) || phone.value.length !== 11 ) {
        result.innerHTML = '<p class="message-error">Informe seu telefone!</p>'
        phone.className = 'field-error'
        phone.focus()
    } else if (!department.value || !isNaN(department.value)) {
        result.innerHTML = '<p class="message-error">Escolha um departamento!</p>'
        department.className = 'field-error'
    } else if (!message.value || !isNaN(message.value)) {
        result.innerHTML = '<p class="message-error">Informe sua mensagem!</p>'
        message.className = 'field-error'
        message.focus()
    }
}

const form = document.querySelector('#form')
form.addEventListener('submit', onSubmit)