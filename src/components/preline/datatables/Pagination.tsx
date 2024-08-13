import { useMemo } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  setPage: (page: number) => void;
}
function Pagination({
  totalItems,
  itemsPerPage,
  page,
  setPage,
}: PaginationProps) {
  const [pagesJsx, pageCount] = useMemo(() => {
    let pageCount = totalItems / itemsPerPage;
    // no need for pagination
    if (pageCount <= 1) return [<></>, 1];
    // if there is a decimal, we need an extra page
    if (pageCount % 1 > 0) pageCount = Math.floor(pageCount) + 1;

    const jsx = [];
    // create div for each page, highlighting the current page
    for (let i = 1; i <= pageCount; i++) {
      jsx.push(
        <div
          key={`pagination_page_${i}`}
          className={`flex justify-center items-center p-1 h-10 w-10 rounded-full hover:cursor-pointer ${
            page === i - 1 ? "bg-gray-100" : ""
          }`}
          data-hs-datatable-paging-pages=""
          onClick={() => setPage(i - 1)}
        >
          {i}
        </div>
      );
    }

    return [jsx, pageCount];
  }, [totalItems, itemsPerPage, page]);
  return (
    <div className="flex items-center mt-4">
      {/* If there are pages, display available pages */}
      {pageCount > 1 ? (
        <div
          className="flex items-center space-x-1"
          data-hs-datatable-paging=""
        >
          {/* Previous Button */}
          <button
            type="button"
            className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            data-hs-datatable-paging-prev=""
            disabled={page <= 0}
            onClick={() => setPage(page - 1)}
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </button>

          {/* Page Buttons */}
          <div
            className="flex items-center space-x-1 [&>.active]:bg-gray-100 dark:[&>.active]:bg-neutral-700"
            data-hs-datatable-paging-pages=""
          >
            {pagesJsx}
          </div>
          {/* Next Button */}
          <button
            type="button"
            className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            data-hs-datatable-paging-next=""
            disabled={page >= pageCount - 1}
            onClick={() => setPage(page + 1)}
          >
            <span className="sr-only">Next</span>
            <span aria-hidden="true">»</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      {/* Displaying how many items have been loaded */}
      <div
        className="text-xs text-gray-500 ms-auto dark:text-neutral-400"
        data-hs-datatable-info=""
      >
        Showing
        <span data-hs-datatable-info-from=""> {page * itemsPerPage + 1} </span>
        to
        <span data-hs-datatable-info-to="">
          {" "}
          {page * itemsPerPage + itemsPerPage > totalItems
            ? totalItems
            : page * itemsPerPage + itemsPerPage}{" "}
        </span>
        of
        <span data-hs-datatable-info-length=""> {totalItems} </span>
        users
      </div>
    </div>
  );
}

export default Pagination;
