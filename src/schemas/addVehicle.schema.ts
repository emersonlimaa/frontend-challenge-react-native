
import * as yup from 'yup'

export const schemaVehicle = yup.object().shape({
  model: yup.string().required(),
  licensePlate: yup.string().required(),
})
