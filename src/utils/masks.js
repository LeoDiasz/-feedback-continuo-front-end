const emailDbc = /[a-z0-9.]+@[dbccompany]+.[com]+.[br]+$/gi
const invalidEmail = /[a-z0-9]+@/gi
const existsCharacter = /[a-zA-Z]/
const existsNumber = /\d/
const existsCharacterSpecial = /[^a-zA-Z0-9]+/g

export {emailDbc, invalidEmail, existsCharacter, existsNumber, existsCharacterSpecial}