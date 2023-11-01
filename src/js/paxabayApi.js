export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '40371169-85f8baccc62c0093630eff47c';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};