
import * as yup from 'yup'

export const schemaDriver = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().test('cpf', 'CPF inválido', (value) => {
    if (!value) {
      return true
    }
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    if (!cpfRegex.test(value)) {
      return false
    }
    const cleanCpf = value.replace(/\D/g, '')
    if (/^(\d)\1+$/.test(cleanCpf)) {
      return false
    }
    let sum = 0
    let remainder
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanCpf.substring(i - 1, i), 10) * (11 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) {
      remainder = 0
    }
    if (remainder !== parseInt(cleanCpf.substring(9, 10), 10)) {
      return false
    }
    sum = 0
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanCpf.substring(i - 1, i), 10) * (12 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) {
      remainder = 0
    }
    if (remainder !== parseInt(cleanCpf.substring(10, 11), 10)) {
      return false
    }
    return true
  })
  .required(),
  vehicle: yup.object({
    name: yup.string(), 
    key: yup.string(),
  })
})
