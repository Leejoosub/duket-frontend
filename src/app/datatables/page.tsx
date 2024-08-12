import DemoHeader from "@/components/DemoHeaders";
import Datatable from "@/components/preline/datatables/Datatable";
import { SAMPLE_DATATABLE_DATA } from "@/constants/sampleData";

function page() {
  return (
    <div>
      <DemoHeader title="Column Actions" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnAction"}
        hasMaxRowCount={true}
        hasInputFilter={true}
      />

      {/* <DemoHeader title="Fixed Header" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnOrder"}
        isHeaderFixed={true}
        uniqueId="fixed_header_table"
      /> */}

      <DemoHeader title="Basic" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnOrder"}
      />

      <DemoHeader title="Scrollable Table (wrapped in div with max height)" />
      {/* Forcing small parent to demo scrollable  */}
      <div className="max-h-[500px] flex">
        <Datatable
          data={SAMPLE_DATATABLE_DATA}
          checkbox={true}
          columnAction={"ColumnOrder"}
          isScrollable={true}
        />
      </div>

      <DemoHeader title="Search Input" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnOrder"}
        hasInputFilter={true}
      />

      <DemoHeader title="Filter Age" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnOrder"}
        hasAgeFilter={true}
      />

      <DemoHeader title="Filter Column" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        columnAction={"ColumnFilter"}
        hasInputFilter={true}
      />

      <DemoHeader title="Hidden Columns" />
      <Datatable
        data={SAMPLE_DATATABLE_DATA}
        checkbox={true}
        hasInputFilter={true}
        columnAction={"ColumnOrder"}
        hasHideColumns={true}
      />
    </div>
  );
}

export default page;
