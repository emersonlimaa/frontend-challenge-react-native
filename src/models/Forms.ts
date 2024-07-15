export interface IFormAddDriver {
  name: string;
  cpf: string;
  vehicle: {
    name: string;
    key: string;
  };
}
export interface IFormAddVehicle {
  model: string;
  driver: string;
  licensePlate: string;
}