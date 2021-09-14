import storage from 'local-storage-fallback';

export const STORAGE_ITEMS = {
  TOKEN: 'token',
} as const;

type StorageItemKey = typeof STORAGE_ITEMS[keyof typeof STORAGE_ITEMS];

export function getStorageItem(key: StorageItemKey) {
  return storage.getItem(key);
}

export function setStorageItem(key: StorageItemKey, value: string | null) {
  if (value) {
    storage.setItem(key, value);
  } else {
    storage.removeItem(key);
  }
}