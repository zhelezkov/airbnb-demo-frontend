import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import { VERTICAL_SCROLLABLE, HORIZONTAL_ORIENTATION } from 'react-dates/constants';
import { daysBeforeToday } from './helpers';
import RangeInput from './RangeInput';

const xsCalendarProps = {
  orientation: VERTICAL_SCROLLABLE,
  numberOfMonths: 4,
};

const mdCalendarProps = {
  orientation: HORIZONTAL_ORIENTATION,
  numberOfMonths: 1,
};

const lgCalendarProps = {
  orientation: HORIZONTAL_ORIENTATION,
  numberOfMonths: 2,
};

function getDatePickerAdaptiveProps() {
  const md = matchMedia('(min-width: 768px)').matches;
  const lg = matchMedia('(min-width: 992px)').matches;

  if (lg) return lgCalendarProps;
  if (md) return mdCalendarProps;
  return xsCalendarProps;
}

export default () => {
  const {
    startDate, endDate, focusedInput, onDatePickerFocusChange, onDatesChange,
  } = this.props;

  const calendarProps = getDatePickerAdaptiveProps();
  const md = matchMedia('(min-width: 768px)').matches;
  const lg = matchMedia('(min-width: 992px)').matches;

  return (
    <div>
      {!md &&
      !lg && (
        <RangeInput
          startDate={startDate}
          endDate={endDate}
          focus={focusedInput}
          onFocusChange={onDatePickerFocusChange}
        />
      )}
      <DayPickerRangeController
        noBorder
        isOutsideRange={daysBeforeToday}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onDatePickerFocusChange}
        hideKeyboardShortcutsPanel
        {...calendarProps}
      />
    </div>
  );
}