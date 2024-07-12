import 'react-native-get-random-values';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: "com.frontendcrud" });

export const clearStorage = (): void => {
  const userAuthToken = storage.getString('userAuthToken');

  storage.clearAll();

  if (userAuthToken) {
    storage.set('userAuthToken', userAuthToken);
  }

};

const MMKV_KEY = 'listDrivers';
const MMKV_KEY_VEHICLES = 'listVehicles';

export const MMKVService = {
  list: (): any => {
    const items = storage.getString(MMKV_KEY);
    if (items) {
      return JSON.parse(items);
    }
    return [];
  },

  add: (object: Omit<any, 'id'>): any => {
    const currentList = MMKVService.list();
    const objectWithID = {
      ...object,
      id: `${new Date().getTime()}`,
    };
    currentList.push(objectWithID);
    storage.set(MMKV_KEY, JSON.stringify(currentList));
    return objectWithID;
  },

  update: (id: string, updatedObject: Omit<any, 'id'>): any | null => {
    const currentList = MMKVService.list();
    const itemIndex = currentList.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      currentList[itemIndex] = { ...currentList[itemIndex], ...updatedObject };
      storage.set(MMKV_KEY, JSON.stringify(currentList));
      return currentList[itemIndex];
    }
    return null;
  },

  get: (id: string): any | null => {
    const currentList = MMKVService.list();
    const item = currentList.find((item) => item.id === id);
    return item ?? null;
  },

  getCpf: (cpf: string): any | null => {
    const currentList = MMKVService.list();
    const item = currentList.find((item) => item.d_cpf === cpf);
    return item ?? null;
  },

  remove: (id: string): void => {
    const currentList = MMKVService.list();
    const newList = currentList.filter((item) => item.id !== id);
    storage.set(MMKV_KEY, JSON.stringify(newList));
  },
};

export const MMKVServiceVehicles = {
  list: (): any => {
    const items = storage.getString(MMKV_KEY_VEHICLES);
    if (items) {
      return JSON.parse(items);
    }
    return [];
  },

  add: (object: Omit<any, 'id'>): any => {
    const currentList = MMKVServiceVehicles.list();
    const objectWithID = {
      ...object,
      id: `${new Date().getTime()}`,
    };
    currentList.push(objectWithID);
    storage.set(MMKV_KEY_VEHICLES, JSON.stringify(currentList));
    return objectWithID;
  },

  update: (id: string, updatedObject: Omit<any, 'id'>): any | null => {
    const currentList = MMKVServiceVehicles.list();
    const itemIndex = currentList.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      currentList[itemIndex] = { ...currentList[itemIndex], ...updatedObject };
      storage.set(MMKV_KEY_VEHICLES, JSON.stringify(currentList));
      return currentList[itemIndex];
    }
    return null;
  },

  get: (id: string): any | null => {
    const currentList = MMKVServiceVehicles.list();
    const item = currentList.find((item) => item.id === id);
    return item ?? null;
  },

  remove: (id: string): void => {
    const currentList = MMKVServiceVehicles.list();
    const newList = currentList.filter((item) => item.id !== id);
    storage.set(MMKV_KEY_VEHICLES, JSON.stringify(newList));
  },
};