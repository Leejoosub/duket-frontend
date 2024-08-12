import { useMemo } from "react";
import { ColumnAction, ColumnDetails, DatatableData } from "./Datatable";

export interface DatatableRowProps {
  data: DatatableData;
  checkbox?: boolean;
  columnDetails: ColumnDetails[];
}

function DatatableRow({ data, checkbox, columnDetails }: DatatableRowProps) {
  const dataJsx = useMemo(() => {
    const jsx = [];

    // Sort / hide columns accordinly
    for (let i = 0; i < columnDetails.length; i++) {
      jsx.push(
        <td
          key={`${data[columnDetails[i].index]}_${i}`}
          className={`p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 ${
            columnDetails[i].hideColumn ? " hidden" : ""
          }`}
        >
          {/* push the appropriate index */}
          {data[columnDetails[i].index]}
        </td>
      );
    }
    return jsx;
  }, [data, columnDetails]);

  return (
    <tr>
      {/* Checkbox */}
      {checkbox ? (
        <td className="py-3 ps-3">
          <div className="flex items-center h-5">
            <input
              id="hs-table-checkbox-1"
              type="checkbox"
              className="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              data-hs-datatable-row-selecting-individual=""
            />
            <label className="sr-only">Checkbox</label>
          </div>
        </td>
      ) : (
        <></>
      )}
      {dataJsx}

      {/* Action column */}
      <td className="p-3 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default DatatableRow;
