// to check if a date is between the range
const isBetween = (date1: Date, date2: Date, date: Date) => {
  return (date1 > date && date2 < date) || (date1 < date && date2 > date);
};
export const generateCalendarDatesJsx = (
  calendarYear: number,
  calendarMonth: number,
  selectedDate: Date,
  selectedDate2: Date,
  setSelectedDate: (date: Date) => void,
  setSelectedDate2: (date: Date) => void,
  isRange: boolean,
  alternate: boolean,
  setAlternate: (alterante: boolean) => void
): JSX.Element[][] => {
  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const weeksJsx: JSX.Element[][] = [[]];

  let weekIndex = 0;
  // Empty slot for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth - 1; i++) {
    weeksJsx[weekIndex].push(
      <button
        key={`emptyDay_${i}`}
        type="button"
        className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
        disabled
      >
        {" "}
      </button>
    );
  }

  // fill in the dates
  for (let i = 1; i <= daysInMonth; i++) {
    if (weeksJsx[weekIndex].length >= 7) {
      weeksJsx.push([]);
      weekIndex++;
    }
    let rangeDivClassname = "";
    // const tempDate = new Date(`${calendarYear}-${calendarMonth + 1}-${i}`);
    const tempDate = new Date(calendarYear, calendarMonth, i);

    // if there is a range, figure out the div CSS for each date
    if (
      isRange &&
      selectedDate.toDateString() != selectedDate2.toDateString()
    ) {
      // if date is between the 2 ranges
      if (
        isBetween(
          selectedDate,
          selectedDate2,
          // new Date(`${calendarYear}-${calendarMonth + 1}-${i}`)
          tempDate
        )
      ) {
        rangeDivClassname =
          "bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800";
      } else if (tempDate.toDateString() === selectedDate.toDateString()) {
        // left end of range
        if (selectedDate < selectedDate2) {
          rangeDivClassname =
            "bg-gray-100 rounded-s-full dark:bg-neutral-800 h-10";
          // right end of range
        } else
          rangeDivClassname =
            "bg-gray-100 rounded-e-full dark:bg-neutral-800 h-10";
      } else if (tempDate.toDateString() === selectedDate2.toDateString()) {
        // left end of range
        if (selectedDate > selectedDate2) {
          rangeDivClassname =
            "bg-gray-100 rounded-s-full dark:bg-neutral-800 h-10";
          // right end of range
        } else
          rangeDivClassname =
            "bg-gray-100 rounded-e-full dark:bg-neutral-800 h-10";
      }
    }

    // default unselected date
    let selectedDateCss =
      " text-gray-800 hover:text-blue-600 focus:text-blue-600";
    // if date is selected, highlight blue
    if (
      (selectedDate.getDate() === i &&
        selectedDate.getFullYear() === calendarYear &&
        selectedDate.getMonth() === calendarMonth) ||
      (isRange &&
        selectedDate2.getDate() === i &&
        selectedDate2.getFullYear() === calendarYear &&
        selectedDate2.getMonth() === calendarMonth)
    ) {
      selectedDateCss = " font-medium bg-blue-600 text-white dark:bg-blue-500";
    }
    weeksJsx[weekIndex].push(
      <div key={`day_${i}`} className={rangeDivClassname}>
        <button
          type="button"
          className={`m-px size-10 flex justify-center items-center border border-transparent text-sm rounded-full hover:border-blue-600  disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 dark:text-neutral-200 ${selectedDateCss}`}
          onClick={() => {
            if (isRange && alternate) setSelectedDate2(tempDate);
            else setSelectedDate(tempDate);
            setAlternate(!alternate);
          }}
        >
          {/* {i} */}
          {tempDate.getDate()}
        </button>
      </div>
    );
  }
  return weeksJsx;
};
