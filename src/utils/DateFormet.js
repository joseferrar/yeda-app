import moment from "moment";

export const Time = (value) => {
  var time = moment(value).format("LT");
  return time;
};

export const Date = (value) => {
  var date = moment(value).format("MMMM Do YY");
  return date;
};
