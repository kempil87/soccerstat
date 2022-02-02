import axios from "axios";
import {appConfig} from "../appConfig";
import {NotificationManager} from "react-notifications";

export const api = axios.create({
    baseURL: appConfig.BASE_URL,
    headers: {
        "X-Auth-Token": appConfig.key,
    }
})

axios.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {


        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);


        switch (error.response?.status) {
            case 401: {
                // console.log('Ошибка - 401');
                // stores.authStore.clearToken();

                throw error;
            }
            case 400: {
                // console.log('Ошибка - 400');
                throw error;
            }
            default: {
                // console.log('Ошибка на сервере');
                throw error;
            }
        }
    },
);
