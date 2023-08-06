import axios from 'axios';

const burgerInstance = axios.create({baseURL: 'https://react-burger-9589e.firebaseio.com/'});

export default burgerInstance;
