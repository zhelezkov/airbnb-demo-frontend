export function buttonDateFormat(startDate, endDate) {
  const format = (date) => date.format('MMM DD');
  return `${format(startDate)}–${format(endDate)}`;
}