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

);
