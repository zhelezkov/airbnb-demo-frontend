import moment from 'moment';

export function isBeforeDay(firstDay, secondDay) {
  if (!moment.isMoment(firstDay) || !moment.isMoment(secondDay)) return false;

  const aYear = firstDay.year();
  const aMonth = firstDay.month();

  const bYear = secondDay.year();
  const bMonth = secondDay.month();

  const isSameYear = aYear === bYear;
  const isSameMonth = aMonth === bMonth;

  if (isSameYear && isSameMonth) return firstDay.date() < secondDay.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

export function isInclusivelyAfterDay(firstDay, secondDay) {
  if (!moment.isMoment(firstDay) || !moment.isMoment(secondDay)) return false;
  return !isBeforeDay(firstDay, secondDay);
}

export const dayBeforeToday = day => {
  return !isInclusivelyAfterDay(day, moment());
};
