import Image from "next/image";
import ColumnActionIcon from "@/assets/columnActionIcon.svg";
const $ = require("jquery");

interface DatatableColumnFilterNumberProps {
  setFilterMin: (min: number) => void;
  setFilterMax: (max: number) => void;
  uniqueId: string;
}

// Specific for filtering number fields
function DatatableColumnFilterNumber({
  uniqueId,
  setFilterMin,
  setFilterMax,
}: DatatableColumnFilterNumberProps) {
  return (
    <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
      <button
        id="hs-dropdown-age-column-filter"
        type="button"
        className="hs-dropdown-toggle size-[30px] inline-flex justify-center items-center gap-2 rounded-lg text-gray-500 border border-transparent hover:border-gray-200 focus:outline-none text-xs md:text-sm dark:text-neutral-500 dark:hover:border-neutral-700"
        onClick={() => {
          // Toggle visibility when clicked
          if ($(`#${uniqueId}`).css("opacity") === "0") {
            $(`#${uniqueId}`).css({
              opacity: 100,
              display: "block",
            });
          } else {
            $(`#${uniqueId}`).css({
              opacity: 0,
              display: "none",
            });
          }
        }}
      >
        <svg
          className="shrink-0 size-3.5"
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
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>

      <div
        id={uniqueId}
        className="absolute top-full -left-full hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
        aria-labelledby="hs-dropdown-age-column-filter"
      >
        <div className="max-w-sm flex gap-x-2">
          <input
            id="hs-input-number-column-age-min"
            type="number"
            className="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Min age"
            onChange={(e) =>
              setFilterMin(
                isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
              )
            }
          />
          <input
            id="hs-input-number-column-age-max"
            type="number"
            className="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Max age"
            onChange={(e) =>
              setFilterMax(
                isNaN(parseInt(e.target.value))
                  ? Number.POSITIVE_INFINITY
                  : parseInt(e.target.value)
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DatatableColumnFilterNumber;
