import { month, days, dateName } from "./util.data";

export const converMonthNumberToText = monthNumber => {
  return month[monthNumber];
};

export const converDayhNumberToText = dayNumber => {
  return days[dayNumber];
};

export const convertNumberToPersian = number => {
  //const persianNumber = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let numberString = number.toString();
  numberString = numberString.replace(/0/g, "۰");
  numberString = numberString.replace(/1/g, "۱");
  numberString = numberString.replace(/2/g, "۲");
  numberString = numberString.replace(/3/g, "۳");
  numberString = numberString.replace(/4/g, "۴");
  numberString = numberString.replace(/5/g, "۵");
  numberString = numberString.replace(/6/g, "۶");
  numberString = numberString.replace(/7/g, "۷");
  numberString = numberString.replace(/8/g, "۸");
  numberString = numberString.replace(/9/g, "۹");
  return numberString;
};

export const convertDayOfMonthToString = number => {
  return dateName[number - 1];
};

export const numberOfDaysInMonth = (month, leapYear) => {
  const nimSalAval = [0, 1, 2, 3, 4, 5];
  const isNimsalAval = nimSalAval.includes(month);
  if (isNimsalAval) return 31;
  else {
    if (leapYear) return 30;
    else {
      if (month === 11) return 29;
      else return 30;
    }
  }
};
