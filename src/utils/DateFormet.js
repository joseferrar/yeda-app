import moment from "moment";

export const Time = (value) => {
  var date = moment(value).format('LT');
  return date;
};
