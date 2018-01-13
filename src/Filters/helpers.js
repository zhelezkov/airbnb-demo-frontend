import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';

export const dayBeforeToday = day => {
  return !isInclusivelyAfterDay(day, moment());
};
