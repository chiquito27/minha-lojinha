export const API_ROOT = `https://minha-lojinha-api.herokuapp.com/api`;
export const FILES_ROOT = `https://minha-lojinha-api.herokuapp.com/public/files`;

export const apiPath = (urlParam) => ({
  USERS: `${API_ROOT}/users`,
  SINGLE_USER: `${API_ROOT}/users/${urlParam}`,
  PRODUCTS: `${API_ROOT}/products`,
  IMAGES: `${API_ROOT}/images`,
  SINGLE_PRODUCT: `${API_ROOT}/products/${urlParam}`,
  LOGIN: `${API_ROOT}/login`,
  LOGOUT: `${API_ROOT}/logout`,
});
