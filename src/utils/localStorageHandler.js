const getFromLocalStorageData = key => {
  return localStorage.getItem(key);
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const clearLocalStorage = () => {
  localStorageServices.saveToLocalStorage('choices', []);
  localStorageServices.saveToLocalStorage('label', '');
  localStorageServices.saveToLocalStorage('require', false);
};

const localStorageServices = {
  getFromLocalStorageData,
  saveToLocalStorage,
  clearLocalStorage,
};

export default localStorageServices;
