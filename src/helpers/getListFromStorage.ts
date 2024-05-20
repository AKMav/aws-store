export const getListFromStorage = <T>(key: string) => {
  const listFromStorage = localStorage.getItem(key);
  const list: T = listFromStorage ? JSON.parse(listFromStorage) : [];
  return list;
};
