import moment from "moment";

export const isNumber = obj => !isNaN(parseFloat(obj)) && isFinite(obj);

export const toISOString = date => {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss");
};
