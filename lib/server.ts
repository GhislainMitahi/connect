// "use client";

// import Axios from 'axios';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import logger from './logService';

const baseURL = process.env.NEXT_PUBLIC_BASE_BACKEND_URL;

axios.interceptors.request.use(null, error => {
    const expectedError = error.respose.data && error.response.status
        && error.response.status >= 400 && error.response.status <= 500;

    const { toast } = useToast();

    if (!expectedError) {
        logger.log(error);
        toast({
            variant: "destructive",
            // title: "Login Successful",
            description: error,
            duration: 3000,
        })
    }

    if (expectedError) {
        logger.log(error)
        if (error.response.status === 404) {
            toast({
                variant: 'destructive',
                description: error.message,
                duration: 3000
            })
        } else {
            toast({
                variant: 'destructive',
                description: error.response.message,
                duration: 3000
            })
        }
    }

})

// const server = Axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL
// });

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    delete: axios.delete
};

