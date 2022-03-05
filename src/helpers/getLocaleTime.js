import moment from "moment";

export const getLocaleTime = (date) => {
    const offset = (new Date().getTimezoneOffset())/ 60;
    return moment(date).zone(offset).format("DD.MM.YYYY - HH:mm")
}
