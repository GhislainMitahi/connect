import Axios from 'axios';

const server = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL
});

export { server };

