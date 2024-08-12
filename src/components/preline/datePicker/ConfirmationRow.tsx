import { useMemo, useState } from "react";

interface ConfirmationRowProps {
  showRange?: boolean;
  showInput?: boolean;
  date1?: Date;
  date2?: Date;
  setDate1?: (date: Date) => void;
  setDate2?: (date: Date) => void;
}

function ConfirmationRow(props: ConfirmationRowProps) {
  const date1Value = useMemo(
    () =>
      props.date1
        ? `${
            props.date1?.getMonth() + 1
          }/${props.date1?.getDate()}/${props.date1?.getFullYear()}`
        : "",
    [props.date1]
  );
  const date2Value = useMemo(
    () =>
      props.date2
        ? `${
            props.date2.getMonth() + 1
          }/${props.date2.getDate()}/${props.date2.getFullYear()}`
        : "",
    [props.date2]
  );

  const [inputDate1, setInputDate1] = useState(date1Value);
  const [inputDate2, setInputDate2] = useState(date2Value);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 px-4 border-t dark:border-neutral-700" />
      {/* Input Group */}

      <div className="w-full flex justify-between flex-col sm:flex-row ">
        {/* End Input Group */}
        {props.showInput ? (
          <>
            <div className="flex justify-center md:justify-start items-center gap-x-2">
              <input
                type="text"
                className="p-2 block w-24 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                value={inputDate1}
                onChange={(e) => {
                  const newDate = new Date(e.target.value);
                  if (!isNaN(newDate.getTime())) {
                    props.setDate1 ? props.setDate1(newDate) : "";
                  }
                  setInputDate1(e.target.value);
                }}
              />
              <span className="text-gray-800 dark:text-white">-</span>
              <input
                type="text"
                className="p-2 block w-24 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                value={inputDate2}
                onChange={(e) => {
                  const newDate = new Date(e.target.value);
                  if (!isNaN(newDate.getTime())) {
                    props.setDate2 ? props.setDate2(newDate) : "";
                  }
                  setInputDate2(e.target.value);
                }}
              />
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Button Group */}
        <div className="flex items-center justify-center sm:justify-end gap-x-2 w-full">
          {props.showRange && props.date1 && props.date2 ? (
            <span className="sm:me-3 text-xs text-gray-500 dark:text-neutral-500 text-nowrap">
              {props.date1 < props.date2
                ? `${date1Value} - ${date2Value}`
                : `${date2Value} - ${date1Value}`}
            </span>
          ) : (
            <></>
          )}
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            Cancel
          </button>
          <button
            type="button"
            className="py-2 px-3  inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationRow;
