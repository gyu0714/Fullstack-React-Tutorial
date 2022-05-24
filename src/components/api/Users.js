import axios from 'axios';

export const fetchUsers = async () => {
  const URL = `https://jsonplaceholder.typicode.com/users`;

  const response = await axios.get(URL);
  return response;
};
