import axios from 'axios';

/*https://api.github.com/repos/rocketseat/unform*/

const api = axios.create({
  baseURL: 'https://api.github.com',

});

export default api;
