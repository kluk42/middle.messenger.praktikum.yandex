export enum FormatStrings {
  DDMMYY = 'dd.mm.yy',
  HHMM = 'hh.mm',
}

const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

export const differenceInDays = (left: Date, right: Date) => {
  const leftMilliseconds = left.getTime();
  const rightMilliseconds = right.getTime();
  const diff = leftMilliseconds - rightMilliseconds;

  return Math.floor(diff / oneDayInMilliseconds);
};

export const format = (date: Date, formatStr: FormatStrings) => {
  switch (formatStr) {
    case FormatStrings.DDMMYY:
      return formatDDMMYY(date);
    case FormatStrings.HHMM:
      return formatHHMM(date);
  }
};

const formatDDMMYY = (date: Date) => {
  const dayNumber = date.getDate();
  let day = dayNumber.toString();

  if (dayNumber < 10) {
    day = `0${dayNumber}`;
  }

  const monthNumber = date.getMonth();
  let month = monthNumber.toString();

  if (monthNumber < 10) {
    month = `0${month}`;
  }

  const year = date.getFullYear().toString().substring(2, 4);

  return `${day}.${month}.${year}`;
};

const formatHHMM = (date: Date) => {
  const hourNumber = date.getHours();
  let hour = hourNumber.toString();

  if (hourNumber < 10) {
    hour = `0${hour}`;
  }

  const minutesNumber = date.getHours();
  let minutes = minutesNumber.toString();

  if (minutesNumber < 10) {
    minutes = `0${minutesNumber}`;
  }

  return `${hour}:${minutes}`;
};
