import { ColumnDetails } from "./Datatable";
const $ = require("jquery");

interface DatatableFilterProps {
  hasSearchInput?: boolean;
  searchInput?: string;
  searchInputUpdate?: (search: string) => void;

  maxRowCount?: number;
  setMaxRowCount?: (rowCount: number) => void;

  showAgeFilter?: boolean;

  setAgeFilterMin?: (ageFilterMin: number) => void;

  setAgeFilterMax?: (ageFilterMax: number) => void;

  showHideColumn?: boolean;
  columnDetails?: ColumnDetails[];
  setColumnDetails?: (columnDetails: ColumnDetails[]) => void;

  isHeaderFixed?: boolean;
}
function DatatableFilter({
  hasSearchInput,
  searchInputUpdate,
  maxRowCount,
  setMaxRowCount,
  showAgeFilter,
  setAgeFilterMin,
  setAgeFilterMax,
  showHideColumn,
  columnDetails,
  setColumnDetails,
}: DatatableFilterProps) {
  return (
    <div className="flex">
      {/* Search Input */}
      {hasSearchInput && searchInputUpdate ? (
        <div className="flex-0">
          <div className="relative max-w-xs">
            <label className="sr-only">Search</label>
            <input
              type="text"
              name="hs-table-filter-search"
              id="hs-table-filter-search"
              className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Search for items"
              data-hs-datatable-search=""
              onChange={(e) => searchInputUpdate(e.target.value)}
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
              <svg
                className="size-4 text-gray-400 dark:text-neutral-500"
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* Hide Column Dropdown */}
      <div className="flex-1 flex items-center justify-end space-x-2">
        {showHideColumn && columnDetails && setColumnDetails ? (
          <select
            id="hs-datatable-with-hidden-columns-select"
            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onChange={(e) => {
              const temp = [...columnDetails];
              if (!isNaN(parseInt(e.target.value)))
                temp[parseInt(e.target.value)].hideColumn =
                  !temp[parseInt(e.target.value)].hideColumn;
              setColumnDetails(temp);
            }}
          >
            <option value="">Hide Column</option>
            <option value="0">Name</option>
            <option value="1">Age</option>
            <option value="2">Address</option>
          </select>
        ) : (
          <></>
        )}

        {/* How many items per page dropdown */}
        {maxRowCount && setMaxRowCount && maxRowCount > 0 ? (
          <select
            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            value={maxRowCount}
            onChange={(e) => setMaxRowCount(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        ) : (
          <></>
        )}
        {/* End Select */}

        {/* Age Filter */}
        {showAgeFilter ? (
          <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
            <button
              id="hs-dropdown-filter"
              type="button"
              className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              onClick={() => {
                if ($("#ageFilterRangeDropdown").css("opacity") === "0") {
                  $("#ageFilterRangeDropdown").css({
                    opacity: 100,
                    display: "block",
                  });
                } else {
                  $("#ageFilterRangeDropdown").css({
                    opacity: 0,
                    display: "none",
                  });
                }
              }}
            >
              Filter
              <svg
                className="hs-dropdown-open:rotate-180 size-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>

            {/* Age filter Range */}
            {showAgeFilter &&
            setAgeFilterMin !== undefined &&
            setAgeFilterMax !== undefined ? (
              <div
                id="ageFilterRangeDropdown"
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700 absolute top-full"
                aria-labelledby="hs-dropdown-filter"
              >
                <div className="max-w-sm flex gap-x-2">
                  <input
                    id="hs-input-number-min-age"
                    type="number"
                    className="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Min age"
                    onChange={(e) =>
                      setAgeFilterMin(
                        isNaN(parseInt(e.target.value))
                          ? 0
                          : parseInt(e.target.value)
                      )
                    }
                  />
                  <input
                    id="hs-input-number-max-age"
                    type="number"
                    className="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Max age"
                    onChange={(e) =>
                      setAgeFilterMax(
                        isNaN(parseInt(e.target.value))
                          ? Number.POSITIVE_INFINITY
                          : parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DatatableFilter;
