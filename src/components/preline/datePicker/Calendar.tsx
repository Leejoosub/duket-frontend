"use client";
import { generateCalendarDatesJsx } from "@/utils/calendar";
import { MouseEvent, MouseEventHandler, useMemo, useState } from "react";
import ConfirmationRow from "./ConfirmationRow";
import TimeInput from "./TimeInput";
import CalendarHeader from "./CalendarHeader";

export interface CalendarProps {
  selectTime?: boolean;
  isRange?: boolean;
  date1?: Date;
  date2?: Date;
  isConfirmationRow?: boolean;
}

function Calendar({
  date1 = new Date(),
  date2,
  selectTime,
  isRange,
  isConfirmationRow,
}: CalendarProps) {
  // Displayed calendar month and year
  const [calendarMonth, setCalendarMonth] = useState(
    date1 ? date1.getMonth() : new Date().getMonth()
  );
  const [calendarYear, setSelectedYear] = useState(
    date1 ? date1.getFullYear() : new Date().getFullYear()
  );

  // user selected date
  const [selectedDate, setSelectedDate] = useState(date1 ? date1 : new Date());
  const [selectedDate2, setSelectedDate2] = useState(
    date2 ? date2 : new Date()
  );

  // For alternating date selection if isRange
  const [alternate, setAlternate] = useState(false);

  // Create the JSX for the selectable years
  const yearsJsx: JSX.Element[] = useMemo(() => {
    const currentYear = new Date().getFullYear();
    // can adjust max date as needed
    return Array.from({ length: currentYear - 2000 + 4 }, (_, x) => (
      <option key={`year_${x}`} value={2000 + x}>
        {2000 + x}
      </option>
    ));
  }, []);

  const weeksJsx: JSX.Element[][] = useMemo(
    () =>
      generateCalendarDatesJsx(
        calendarYear,
        calendarMonth,
        selectedDate,
        selectedDate2,
        setSelectedDate,
        setSelectedDate2,
        isRange ?? false,
        alternate,
        setAlternate
      ),
    [calendarYear, calendarMonth, selectedDate, selectedDate2]
  );

  return (
    <div className="p-3 space-y-0.5 w-fit rounded-lg border-2 border-black">
      {/* Days of the Week End */}
      <CalendarHeader
        calendarMonth={calendarMonth}
        setCalendarMonth={setCalendarMonth}
        calendarYear={calendarYear}
        setSelectedYear={setSelectedYear}
      />
      {/* Days */}
      {weeksJsx.map((week, index) => (
        <div className="flex" key={`week_${index}`}>
          {week}
        </div>
      ))}
      {selectTime ? <TimeInput /> : <></>}
      {isConfirmationRow ? <ConfirmationRow /> : <></>}
    </div>
  );
}

export default Calendar;
