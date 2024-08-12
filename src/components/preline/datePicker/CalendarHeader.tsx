import { useMemo } from "react";

interface CalendarHeaderProps {
  calendarMonth: number;
  setCalendarMonth: (month: number) => void;
  calendarYear: number;
  setSelectedYear: (year: number) => void;
}
function CalendarHeader({
  calendarMonth,
  setCalendarMonth,
  calendarYear,
  setSelectedYear,
}: CalendarHeaderProps) {
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

  return (
    <>
      {/* Months */}
      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3 w-full">
        {/* Prev Button */}
        <div className="col-span-1">
          <button
            type="button"
            className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-label="Previous"
            onClick={() => {
              setCalendarMonth(calendarMonth - 1);
            }}
            disabled={calendarMonth <= 0}
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        {/* End Prev Button */}

        {/* Month / Year */}
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <div className="relative">
            <select
              className="flex text-end"
              onChange={(e) => {
                setCalendarMonth(parseInt(e.target.value));
              }}
              value={calendarMonth}
            >
              <option value={0}>January</option>
              <option value={1}>February</option>
              <option value={2}>March</option>
              <option value={3}>April</option>
              <option value={4}>May</option>
              <option value={5}>June</option>
              <option value={6}>July</option>
              <option value={7}>August</option>
              <option value={8}>September</option>
              <option value={9}>October</option>
              <option value={10}>November</option>
              <option value={11}>December</option>
            </select>
          </div>

          <span className="text-gray-800 dark:text-neutral-200">/</span>
          <div className="relative">
            <select
              onChange={(e) => {
                setSelectedYear(parseInt(e.target.value));
              }}
              value={calendarYear}
            >
              {yearsJsx}
            </select>
          </div>
        </div>
        {/* End Month / Year */}

        {/* Next Button */}
        <div className="col-span-1 flex justify-end">
          <button
            type="button"
            className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-label="Next"
            onClick={() => {
              setCalendarMonth(calendarMonth + 1);
            }}
            disabled={calendarMonth >= 11}
          >
            <svg
              className="shrink-0 size-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        {/* End Next Button */}
      </div>
      {/* Months End */}
      {/* Days of the Week */}

      <div className="flex pb-1.5">
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Mo
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Tu
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          We
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Th
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Fr
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Sa
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Su
        </span>
      </div>
    </>
  );
}

export default CalendarHeader;
