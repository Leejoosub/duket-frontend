"use client";

import { useEffect, useMemo, useState } from "react";
import DatatableRow from "./DatatableRow";
import DatatableHeader from "./DatatableHeader";
import DatatableFilter from "./DatatableFilter";
import { isAgeBetween } from "@/utils/datatable";
import DatatableNoResults from "./DatatableNoResults";
import Pagination from "./Pagination";
import { PdfExport } from "@/constants/pdfTypes";
export type ColumnAction = "ColumnOrder" | "ColumnAction" | "ColumnFilter";
const $ = require("jquery");

interface DatatableProps {
  data: DatatableData[];
  checkbox?: boolean;
  columnFilter?: boolean;
  columnAction: ColumnAction;
  hasInputFilter?: boolean;
  hasAgeFilter?: boolean;
  hasMaxRowCount?: boolean;
  hasHideColumns?: boolean;
  isHeaderFixed?: boolean;
  uniqueId?: string;

  isScrollable?: boolean;
  hasExport?: boolean;
}

export interface ColumnDetails {
  index: DatatableKeys; // The order in which to display the columns
  hideColumn: boolean; // hide or not hide column
}

export interface DatatableData {
  name: string;
  age: number;
  address: string;
}

export type DatatableKeys = keyof DatatableData;
// Default order of columns
const defaultOrder: DatatableKeys[] = ["name", "age", "address"];

function Datatable({
  data,
  checkbox,
  columnAction,
  hasInputFilter,
  hasAgeFilter,
  hasMaxRowCount,
  hasHideColumns,
  isHeaderFixed,
  isScrollable,
  uniqueId,
  hasExport,
}: DatatableProps) {
  const [dataJsx, setDataJsx] = useState<JSX.Element[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);
  const [maxRowCount, setMaxRowCount] = useState(15);
  const [ageFilterMin, setAgeFilterMin] = useState<number>(0);
  const [ageFilterMax, setAgeFilterMax] = useState<number>(200);
  const [addressFilter, setAddressFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [sortBy, setSortBy] = useState<DatatableKeys | "">("");
  const [sortAscending, setSortAscending] = useState(true);
  const [pdfContent, setPdfContent] = useState<PdfExport>();

  // order of the items + whether the column is hidden
  const [columnDetails, setColumnDetails] = useState<ColumnDetails[]>(
    defaultOrder.map((item) => {
      return { index: item, hideColumn: false };
    })
  );

  // Sorting, creating the table JSX, implementing column actions, filtering
  useEffect(() => {
    const dataClone = [...data];
    // Sort the data based accordingly
    if (sortBy != "") {
      let index = 0;
      columnDetails.forEach((item, cdIndex) => {
        if (item.index === sortBy) index = cdIndex;
      });
      // Sort number columns
      if (sortBy === "age") {
        dataClone.sort((a, b) => {
          if (sortAscending) return b.age - a.age;
          else return a.age - b.age;
        });
        // sort string columns
      } else {
        dataClone.sort((a, b) => {
          if (sortAscending)
            return b[sortBy].localeCompare(a[sortBy], undefined, {
              sensitivity: "base",
            });
          return a[sortBy].localeCompare(b[sortBy], undefined, {
            sensitivity: "base",
          });
        });
      }
    }

    const jsx = [];
    // create the body content
    const pdfRow = [];

    const lastItem = Math.min(
      dataClone.length,
      page * maxRowCount + maxRowCount
    );
    for (let index = page * maxRowCount; index < lastItem; index++) {
      // Skip over the items that do not meet the filter conditions
      if (
        // Search input filter
        (searchInput !== "" &&
          !dataClone[index].address
            .toLowerCase()
            .includes(searchInput.toLowerCase()) &&
          !dataClone[index].name
            .toLowerCase()
            .includes(searchInput.toLowerCase()) &&
          !dataClone[index].age.toString().includes(searchInput)) ||
        // age filter
        ((hasAgeFilter || columnAction === "ColumnFilter") &&
          !isAgeBetween(ageFilterMin, ageFilterMax, dataClone[index].age)) ||
        // column address filter
        (addressFilter !== "" &&
          !dataClone[index].address.includes(addressFilter)) ||
        // column name filter
        (nameFilter !== "" &&
          !dataClone[index].name
            .toLowerCase()
            .includes(nameFilter.toLowerCase()))
      ) {
        continue;
      }

      if (hasExport) {
        // create a new row for the pdf export in the correct order
        const newRow = [];
        for (let i = 0; i < columnDetails.length; i++) {
          newRow.push(dataClone[index][columnDetails[i].index]);
        }
        pdfRow.push(newRow);
      }
      // Push jsx items that meet filter conditions, in the sorted order
      jsx.push(
        <DatatableRow
          key={`datatable_row_${index}_${dataClone[index].name}`}
          data={dataClone[index]}
          checkbox={checkbox}
          columnDetails={columnDetails}
        />
      );
    }

    // create the export object
    if (hasExport) {
      const headers: any = [];
      // create headers
      columnDetails.forEach((item, cdIndex) => {
        headers.push(item.index);
      });

      setPdfContent({
        content: [
          { text: "Datatable", style: "header" },
          {
            style: "test",
            table: {
              body: [headers, ...pdfRow],
              // body: [headers, pdfRow[0]],
            },
          },
        ],
      });
    }

    setDataJsx(jsx);
  }, [
    data,
    ageFilterMin,
    ageFilterMax,
    columnDetails,
    nameFilter,
    addressFilter,
    searchInput,
    sortBy,
    sortAscending,
    maxRowCount,
    page,
  ]);

  // Scroll Event Handler for fixed header
  useEffect(() => {
    // only create the event handler if needed
    if (isHeaderFixed) {
      const headerPlaceholder = document.getElementById(
        `${uniqueId}_placeholder`
      );
      const handleScroll = () => {
        const parentDiv = document.getElementById(uniqueId ?? "");
        let topY = 0;
        let bottomY = 0;
        if (parentDiv) {
          const rect = parentDiv.getBoundingClientRect();
          topY = rect.top + window.scrollY;
          bottomY = topY + parentDiv.scrollHeight + window.scrollY;
        }
        const header = document.getElementById(`${uniqueId}-header`);
        bottomY = topY + (parentDiv?.scrollHeight ?? 0);
        // if within the bounds of the component, fix header
        if (parentDiv && header && topY < scrollY && bottomY > scrollY) {
          headerPlaceholder?.classList.remove(`hidden`);
          header.classList.add("fixed");
          // else remove
        } else {
          headerPlaceholder?.classList.add(`hidden`);
          header?.classList.remove("fixed");
        }
      };
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`flex flex-col w-fit max-h-full pb-10 ${
        isScrollable ? "overflow-y-auto" : ""
      }`}
    >
      {
        <DatatableFilter
          hasSearchInput={hasInputFilter}
          searchInput={searchInput}
          searchInputUpdate={setSearchInput}
          maxRowCount={hasMaxRowCount ? maxRowCount : undefined}
          setMaxRowCount={setMaxRowCount}
          showAgeFilter={hasAgeFilter}
          setAgeFilterMin={setAgeFilterMin}
          setAgeFilterMax={setAgeFilterMax}
          showHideColumn={hasHideColumns}
          columnDetails={columnDetails}
          setColumnDetails={setColumnDetails}
          hasExport={hasExport}
          pdfContent={pdfContent}
        />
      }
      <div className="overflow-y-auto">
        <div className="inline-block align-middle">
          <div className="overflow-hidden">
            <div id={`${uniqueId}_placeholder`} className="h-40px w-full"></div>
            <table id={uniqueId} className="min-w-fit">
              <DatatableHeader
                checkbox={checkbox}
                columnAction={columnAction ? columnAction : "ColumnOrder"}
                setAgeFilterMax={setAgeFilterMax}
                setAgeFilterMin={setAgeFilterMin}
                setAddressFilter={setAddressFilter}
                setNameFilter={setNameFilter}
                setColumnDetails={setColumnDetails}
                columnDetails={columnDetails}
                id={uniqueId ?? ""}
                sortAscending={sortAscending}
                sortBy={sortBy}
                setSortBy={setSortBy}
                setSortAscending={setSortAscending}
              />
              <tbody className="w-fit">{dataJsx}</tbody>
            </table>
            {dataJsx.length === 0 ? <DatatableNoResults /> : <></>}
          </div>
        </div>
      </div>
      {true ? (
        <Pagination
          totalItems={data.length}
          page={page}
          itemsPerPage={maxRowCount}
          setPage={setPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Datatable;
