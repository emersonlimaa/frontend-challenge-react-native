export interface IItemListVehicle {
  data: {
    model: string;
    licensePlate: string;
    id: string;
  };
  selected: boolean;
  setSelected: () => void;
}

export interface IItemListDriver {
  data: {
    name: string
    cpf: string;
    vehicle: {
      name: string;
      key: string;
    }
  };
  selected: boolean;
  setSelected: () => void;
}