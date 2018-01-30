function formHandler(e) {
  e.preventDefault()
  e.stopImmediatePropagation()
  formButton.textContent='Sending...'
  formButton.classList.add('saving')
  formButton.disabled = true
  $.ajax(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    data: {
      chat_id:    233239989,
      text:       `<strong>Message form foliobot.accio.pro</strong>\n\nUser: @${userInput.value}\nMessage: ${messageInput.value}`,
      parse_mode: 'html',
      disable_web_page_preview: true
    },
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      if (data.ok == true) {
        formButton.textContent='Sent'
        formButton.classList.remove('saving')
        formButton.classList.add('success')
        setTimeout(function() {
          formButton.textContent='Send'
          formButton.classList.remove('success')
          formButton.disabled = false
        }, 2000)
      }
    }
  })
}


const form = document.getElementById('message-form')
const userInput = document.getElementById('user')
const messageInput = document.getElementById('mesage')
const formButton = document.getElementById('form-button')

form.addEventListener('submit', (e) => formHandler(e))
