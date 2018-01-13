import moment from 'moment';

export function buttonDateFormat(startDate, endDate) {
  const format = (date) => date.format('MMM DD');
  return `${format(startDate)}–${format(endDate)}`;
}

export const daysBeforeToday = day => {
  return day.isBefore(moment());
};
