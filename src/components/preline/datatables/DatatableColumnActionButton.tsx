import ColumnActionIcon from "@/assets/columnActionIcon.svg";
import Image from "next/image";
import { ColumnDetails, DatatableKeys } from "./Datatable";
const $ = require("jquery");

interface DatatableColumnActionButtonProps {
  uniqueId: string;
  columnDetails: ColumnDetails[];
  setColumnDetails: (columnDetails: ColumnDetails[]) => void;
  index: number;
  setSortAscending: (ascending: boolean) => void;
  setSortBy: (sortBy: DatatableKeys) => void;
}
function DatatableColumnActionButton({
  uniqueId,
  setColumnDetails,
  columnDetails,
  index,
  setSortAscending,
  setSortBy,
}: DatatableColumnActionButtonProps) {
  return (
    <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
      <button
        id="hs-dropdown-address-column-actions"
        type="button"
        className="hs-dropdown-toggle size-[30px] inline-flex justify-center items-center gap-2 rounded-lg text-gray-500 border border-transparent hover:border-gray-200 focus:outline-none text-xs md:text-sm dark:text-neutral-500 dark:hover:border-neutral-700"
        onClick={() => {
          // Toggle visibility when clicked
          if ($(`#columnActionMenu_${uniqueId}`).css("opacity") === "0") {
            $(`#columnActionMenu_${uniqueId}`).css({
              opacity: 100,
              display: "block",
            });
          } else {
            $(`#columnActionMenu_${uniqueId}`).css({
              opacity: 0,
              display: "none",
            });
          }
        }}
      >
        <Image
          src={ColumnActionIcon}
          alt="column action"
          width={15}
          height={15}
        />
      </button>

      <div
        id={`columnActionMenu_${uniqueId}`}
        className="absolute top-full -left-full hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
        aria-labelledby="hs-dropdown-address-column-actions"
      >
        <div className="min-w-24 flex flex-col gap-y-1">
          <button
            type="button"
            data-hs-datatable-col-sorting="asc"
            className="flex items-center gap-x-2 py-2 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            onClick={() => {
              setSortAscending(true);
              setSortBy(columnDetails[index].index);
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
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            Sort
          </button>
          <button
            type="button"
            data-hs-datatable-col-sorting="desc"
            className="flex items-center gap-x-2 py-2 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            onClick={() => {
              setSortAscending(false);
              setSortBy(columnDetails[index].index);
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
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
            Sort
          </button>
          <button
            type="button"
            data-hs-datatable-col-reorder="left"
            className="flex items-center gap-x-2 py-2 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            onClick={() => {
              if (index > 0) {
                const tempDetails = [...columnDetails];
                const temp = tempDetails[index];
                tempDetails[index] = tempDetails[index - 1];
                tempDetails[index - 1] = temp;
                setColumnDetails(tempDetails);
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
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Move
          </button>
          <button
            type="button"
            data-hs-datatable-col-reorder="right"
            className="flex items-center gap-x-2 py-2 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            onClick={() => {
              if (index < columnDetails.length - 1) {
                const tempDetails = [...columnDetails];
                const temp = tempDetails[index];
                tempDetails[index] = tempDetails[index + 1];
                tempDetails[index + 1] = temp;
                setColumnDetails(tempDetails);
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
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            Move
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatatableColumnActionButton;
