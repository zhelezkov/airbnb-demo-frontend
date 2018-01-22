import moment from 'moment';

export function getButtonTitle(startDate, endDate, isOpen) {
  if (startDate && endDate) return getButtonDateFormat(startDate, endDate);
  if (isOpen) return 'Check in – Check out';
  return 'Dates';
}

export function getButtonDateFormat(startDate, endDate) {
  const format = date => date.format('MMM DD');
  return `${format(startDate)} – ${format(endDate)}`;
}

export const daysBeforeToday = day => {
  return day.isBefore(moment());
};
