import Image from "next/image";
import { ColumnAction, ColumnDetails, DatatableKeys } from "./Datatable";
import sortColumnIcon from "@/assets/sortColumn.svg";
import { useMemo } from "react";
import DatatableColumnActionButton from "./DatatableColumnActionButton";
import DatatableColumnFilterString from "./DatatableColumnFilterString";
import DatatableColumnFilterNumber from "./DatatableColumnFilterNumber";

interface DatatableHeaderProps {
  checkbox?: boolean;
  columnAction: ColumnAction;
  setAgeFilterMin: (min: number) => void;
  setAgeFilterMax: (max: number) => void;

  setNameFilter: (name: string) => void;
  setAddressFilter: (address: string) => void;
  setColumnDetails: (columnDetails: ColumnDetails[]) => void;
  columnDetails: ColumnDetails[];
  id?: string;
  sortAscending?: boolean;
  sortBy: DatatableKeys | "";
  setSortAscending: (ascending: boolean) => void;
  setSortBy: (sortBy: DatatableKeys | "") => void;
}

function DatatableHeader({
  checkbox,
  columnAction,
  setAgeFilterMin,
  setAgeFilterMax,

  setNameFilter,
  setAddressFilter,
  setColumnDetails,
  columnDetails,
  id,
  sortAscending,
  setSortAscending,
  sortBy,
  setSortBy,
}: DatatableHeaderProps) {
  const headerJsxSorted = useMemo(() => {
    let nameIndex = 0;
    let ageIndex = 0;
    let addressIndex = 0;
    columnDetails.forEach((detail, index) => {
      if (detail.index === "address") addressIndex = index;
      else if (detail.index === "age") ageIndex = index;
      else if (detail.index === "name") nameIndex = index;
    });
    const jsx = {
      name: (
        <th
          key="header_name"
          scope="col"
          className="py-1 group text-start font-normal focus:outline-none"
        >
          <div
            className={`py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700`}
          >
            Name
            {/* button and functionality for column actions */}
            {columnAction === "ColumnFilter" ? (
              <DatatableColumnFilterString
                uniqueId="headerNameFilter"
                setFilter={setNameFilter}
              />
            ) : columnAction === "ColumnAction" ? (
              <DatatableColumnActionButton
                uniqueId="NameColumnAction"
                index={nameIndex}
                columnDetails={columnDetails}
                setColumnDetails={setColumnDetails}
                setSortBy={setSortBy}
                setSortAscending={setSortAscending}
              />
            ) : (
              <Image
                src={sortColumnIcon}
                alt="Sort By Icon"
                width={15}
                height={15}
                className="hover:cursor-pointer"
                onClick={() => {
                  if (sortBy === "name") {
                    if (sortAscending) {
                      setSortBy("");
                      setSortAscending(false);
                    } else {
                      setSortAscending(true);
                    }
                  } else {
                    setSortBy("name");
                    setSortAscending(false);
                  }
                }}
              />
            )}
          </div>
        </th>
      ),
      age: (
        <th
          key="header_age"
          scope="col"
          className="py-1 group text-start font-normal focus:outline-none"
        >
          <div
            className={`py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700`}
          >
            Age
            {/* button and functionality for column actions */}
            {columnAction === "ColumnFilter" ? (
              <DatatableColumnFilterNumber
                uniqueId="columnNumberFilter"
                setFilterMin={setAgeFilterMin}
                setFilterMax={setAgeFilterMax}
              />
            ) : columnAction === "ColumnAction" ? (
              <DatatableColumnActionButton
                uniqueId="AgeColumnAction"
                index={ageIndex}
                columnDetails={columnDetails}
                setColumnDetails={setColumnDetails}
                setSortBy={setSortBy}
                setSortAscending={setSortAscending}
              />
            ) : (
              <Image
                src={sortColumnIcon}
                alt="Sort By Icon"
                width={15}
                height={15}
                className="hover:cursor-pointer"
                onClick={() => {
                  if (sortBy === "age") {
                    if (sortAscending) {
                      setSortBy("");
                      setSortAscending(false);
                    } else {
                      setSortAscending(true);
                    }
                  } else {
                    setSortBy("age");
                    setSortAscending(false);
                  }
                }}
              />
            )}
          </div>
        </th>
      ),
      address: (
        <th
          key="header_address"
          scope="col"
          className="py-1 group text-start font-normal focus:outline-none"
        >
          <div
            className={`py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700`}
          >
            Address
            {/* button and functionality for column actions */}
            {columnAction === "ColumnFilter" ? (
              <DatatableColumnFilterString
                uniqueId="headerAddressFilter"
                setFilter={setAddressFilter}
              />
            ) : columnAction === "ColumnAction" ? (
              <DatatableColumnActionButton
                uniqueId="AddressColumnAction"
                index={addressIndex}
                columnDetails={columnDetails}
                setColumnDetails={setColumnDetails}
                setSortBy={setSortBy}
                setSortAscending={setSortAscending}
              />
            ) : (
              <Image
                src={sortColumnIcon}
                alt="Sort By Icon"
                width={15}
                height={15}
                className="hover:cursor-pointer"
                onClick={() => {
                  if (sortBy === "address") {
                    if (sortAscending) {
                      setSortBy("");
                      setSortAscending(false);
                    } else {
                      setSortAscending(true);
                    }
                  } else {
                    setSortBy("address");
                    setSortAscending(false);
                  }
                }}
              />
            )}
          </div>
        </th>
      ),
    };

    // order the header as necessary
    const sorted: JSX.Element[] = [];
    // Sort / Hide column header accordingly
    columnDetails.forEach((item) => {
      if (item.hideColumn) return;
      sorted.push(jsx[item.index]);
    });

    return sorted;
  }, [columnDetails, sortBy, sortAscending]);

  return (
    <thead
      id={`${id}-header`}
      className="border-b border-gray-200 bg-white dark:border-neutral-700"
    >
      <tr>
        {/* Checkbox header */}
        {checkbox ? (
          <th scope="col" className="py-1 ps-3 --exclude-from-ordering">
            <div className="flex items-center h-5">
              <input
                id="hs-table-checkbox-all"
                type="checkbox"
                className="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">Checkbox</label>
            </div>
          </th>
        ) : (
          <></>
        )}
        {headerJsxSorted}

        {/* Action header */}
        <th
          scope="col"
          className="py-2 px-3 text-end font-normal text-sm text-gray-500 --exclude-from-ordering dark:text-neutral-500"
        >
          Action
        </th>
      </tr>
    </thead>
  );
}

export default DatatableHeader;
