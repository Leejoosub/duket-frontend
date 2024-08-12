import ColumnActionIcon from "@/assets/columnActionIcon.svg";
import Image from "next/image";
const $ = require("jquery");

interface DatatableColumnFilterStringProps {
  uniqueId: string;
  setFilter: (filterText: string) => void;
}

// Specific for filtering string column
function DatatableColumnFilterString({
  uniqueId,
  setFilter,
}: DatatableColumnFilterStringProps) {
  return (
    <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20 ms-2">
      <button
        id="hs-dropdown-address-column-filter"
        type="button"
        className="hs-dropdown-toggle size-[30px] inline-flex justify-center items-center gap-2 rounded-lg text-gray-500 border border-transparent hover:border-gray-200 focus:outline-none text-xs md:text-sm dark:text-neutral-500 dark:hover:border-neutral-700"
        onClick={() => {
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
        <Image
          src={ColumnActionIcon}
          alt="Column Action"
          width={13}
          height={13}
        />
      </button>

      <div
        id={uniqueId}
        className="absolute top-full -left-full min-w-[100px] hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
        aria-labelledby="hs-dropdown-address-column-filter"
      >
        <div className="max-w-sm flex gap-x-2">
          <input
            id="hs-input-text-column-address"
            type="text"
            className="py-1 px-2.5 block w-full border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Filter Text"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DatatableColumnFilterString;
