/* eslint-disable @typescript-eslint/no-shadow */
import { Box } from 'rebass';
import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';

export interface DateProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateInput: React.FC<DateProps> = ({ date, setDate }) => {
  const FORMAT = 'DD/MM/YY';

  const handleDayChange = () => {
    setDate(date);
  };
  return (
    <Box>
      <DayPickerInput format={FORMAT} onDayChange={handleDayChange} placeholder="DD/MM/YYYY" />
    </Box>
  );
};

export default DateInput;
