
import * as yup from 'yup'

export const schemaVehicle = yup.object().shape({
  name: yup.string().required(),
  placa: yup.string().required(),
})
