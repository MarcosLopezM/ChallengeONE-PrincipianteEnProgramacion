import '../styles/style.css'

const LETTERS = ['e', 'i', 'a', 'o', 'u']
const ENCODING = ['enter', 'imes', 'ai', 'ober', 'ufat']
const letterLength = LETTERS.length
const displayTxtStyle = 'font-size:1.2em; color: #0A3871; width: 400px'

const encode = (message) => {
  let encodeMessage = message

  for (let letter = 0; letter < letterLength; letter++) {
    encodeMessage = encodeMessage.replaceAll(LETTERS[letter], ENCODING[letter])
  }

  return encodeMessage
}

const decode = (message) => {
  let decodeMessage = message

  for (let letter = 0; letter < letterLength; letter++) {
    decodeMessage = decodeMessage.replaceAll(ENCODING[letter], LETTERS[letter])
  }

  return decodeMessage
}

const showEncodeMessage = () => {
  const targetMessage = document.querySelector('.encoder__message').value
  const sectionMessage = document.querySelector('.display')

  document.querySelector('.display').classList.add('display-show')

  sectionMessage.innerHTML = `
        <p style='${displayTxtStyle}'>${encode(targetMessage)}</p>
    `
}

const showDecodeMessage = () => {
  const targetMessage = document.querySelector('.encoder__message').value
  const sectionMessage = document.querySelector('.display')

  document.querySelector('.display').classList.add('display-show')

  sectionMessage.innerHTML = `
          <p style='${displayTxtStyle}'>${decode(targetMessage)}</p>
      `
}

const encodeBtn = document.querySelector('.encode')
encodeBtn.onclick = showEncodeMessage

const decodeBtn = document.querySelector('.decode')
decodeBtn.onclick = showDecodeMessage
