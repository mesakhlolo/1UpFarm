import axios from 'axios';

// Mengambil token dari localStorage (misalnya, setelah login)
export const getToken = () => {
  return localStorage.getItem('token');  // Atau dari tempat lain sesuai implementasi
};

// Mengatur token di header request Axios
export const setAuthHeader = (config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

// Menangani request dengan autentikasi
export const getAuthenticatedRequest = (url) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,  // Menambahkan token ke header
    },
  });
};
