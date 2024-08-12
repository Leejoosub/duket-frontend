import { generateCalendarDatesJsx } from "@/utils/calendar";
import { useMemo, useState } from "react";
import { CalendarProps } from "./Calendar";
import CalendarHeader from "./CalendarHeader";
import ConfirmationRow from "./ConfirmationRow";

interface DoubleCalendarProps extends CalendarProps {
  showConfirmationRange?: boolean;
  showConfirmationRowInput?: boolean;
}
function DoubleCalendar({
  date1 = new Date(),
  date2,
  isRange,
  isConfirmationRow,
  showConfirmationRange,
  showConfirmationRowInput,
}: DoubleCalendarProps) {
  // Displayed calendar month and year
  const [calendarMonth, setCalendarMonth] = useState(
    date1 ? date1.getMonth() : new Date().getMonth()
  );
  const [calendarYear, setSelectedYear] = useState(
    date1 ? date1.getFullYear() : new Date().getFullYear()
  );
  const [calendarMonth2, setCalendarMonth2] = useState(
    date1 ? date1.getMonth() : new Date().getMonth()
  );
  const [calendarYear2, setSelectedYear2] = useState(
    date1 ? date1.getFullYear() : new Date().getFullYear()
  );

  // user selected date
  const [selectedDate, setSelectedDate] = useState(date1 ? date1 : new Date());
  const [selectedDate2, setSelectedDate2] = useState(
    date2 ? date2 : new Date()
  );

  // For alternating date selection if isRange
  const [alternate, setAlternate] = useState(false);

  // generate the dates JSX for the calendar (1 array per week)
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

  // generate the dates JSX for the second calendar
  const weeksJsx2: JSX.Element[][] = useMemo(
    () =>
      generateCalendarDatesJsx(
        calendarYear2,
        calendarMonth2,
        selectedDate,
        selectedDate2,
        setSelectedDate,
        setSelectedDate2,
        isRange ?? false,
        alternate,
        setAlternate
      ),
    [calendarYear2, calendarMonth2, selectedDate, selectedDate2, alternate]
  );

  return (
    <div className="flex flex-col w-fit">
      <div className="flex flex-col sm:flex-row">
        {/* CALENDAR 1 */}
        <div className="p-3 space-y-0.5 w-fit">
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
        </div>
        {/* END OF CALENDAR 1 */}
        {/* CALENDAR 2 */}
        <div className="p-3 space-y-0.5 w-fit">
          <CalendarHeader
            calendarMonth={calendarMonth2}
            setCalendarMonth={setCalendarMonth2}
            calendarYear={calendarYear2}
            setSelectedYear={setSelectedYear2}
          />
          {/* Days */}
          {weeksJsx2.map((week, index) => (
            <div className="flex" key={`week_${index}`}>
              {week}
            </div>
          ))}
        </div>
        {/* END OF CALENDAR 2 */}
      </div>
      {/*  */}
      {isConfirmationRow ? (
        <ConfirmationRow
          showRange={showConfirmationRange}
          showInput={showConfirmationRowInput}
          date1={selectedDate}
          date2={selectedDate2}
          setDate1={setSelectedDate}
          setDate2={setSelectedDate2}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default DoubleCalendar;
