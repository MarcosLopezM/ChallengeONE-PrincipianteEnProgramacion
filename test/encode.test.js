import { describe, expect, it } from 'vitest'

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const encode = (message) => {
  if (typeof message !== 'string') throw new Error('The message must be a string')
  const letters = ['e', 'i', 'a', 'o', 'u']
  const encoding = ['enter', 'imes', 'ai', 'ober', 'ufat']

  let encodeMessage = message

  for (let letter = 0; letter < letters.length; letter++) {
    encodeMessage = encodeMessage.replaceAll(letters[letter], encoding[letter])
  }

  return encodeMessage
}

const decode = (message) => {
  if (typeof message !== 'string') throw new Error('The message must be a string')
  const letters = ['e', 'i', 'a', 'o', 'u']
  const encoding = ['enter', 'imes', 'ai', 'ober', 'ufat']

  let decodeMessage = message

  for (let letter = 0; letter < letters.length; letter++) {
    decodeMessage = decodeMessage.replaceAll(encoding[letter], letters[letter])
  }

  return decodeMessage
}

describe('Encoding message', () => {
  it('should be a function', () => {
    expect(typeof encode).toBe('function')
  })

  it('should return a lowercase string', () => {
    expect(() => encode()).toThrow('The message must be a string')
  })

  it('should replace vowels to encode the message', () => {
    expect(encode('murcielago')).toBe('mufatrcimesenterlaigober')
    expect(encode('parrilla')).toBe('pairrimesllai')
    expect(encode('parangaricutirimicuaro')).toBe('pairaingairimescufattimesrimesmimescufatairober')
  })
})

describe('Encoding message', () => {
  it('should be a function', () => {
    expect(typeof decode).toBe('function')
  })

  it('should return a lowercase string', () => {
    expect(() => decode()).toThrow('The message must be a string')
  })

  it('should replace encode letters to normal letters', () => {
    expect(decode('mufatrcimesenterlaigober')).toBe('murcielago')
    expect(decode('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!')).toBe('felicidades por enfrentar este desafio y haberlo concluido con exito!')
  })
})
