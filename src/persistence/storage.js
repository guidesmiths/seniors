export const put = (key, value, options = {}) => {
  window.sessionStorage.setItem(key, value);
}

export const get = (key) => {
  return window.sessionStorage.getItem(key);
}

export const remove = (key) => {
  return window.sessionStorage.removeItem(key);
}

export const clear = () => {
  window.sessionStorage.clear();
}
