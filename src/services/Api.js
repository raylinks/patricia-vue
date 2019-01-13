import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://teamltd.org/api/v1/users/',
});
