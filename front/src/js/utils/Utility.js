import moment from "moment";

export const isNumber = obj => !isNaN(parseFloat(obj)) && isFinite(obj);

export const toISOString = date => {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss");
};

export const toReadableString = date => {
    return moment(date).format("MM/DD/YYYY HH:mm:ss");
};

