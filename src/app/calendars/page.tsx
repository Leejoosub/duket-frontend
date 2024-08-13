"use client";

import DemoHeader from "@/components/DemoHeaders";
import Calendar from "@/components/preline/datePicker/Calendar";
import DoubleCalendar from "@/components/preline/datePicker/DoubleCalendar";
export default function page() {
  return (
    <main>
      <DemoHeader title="Basic" />
      <Calendar />
      <DemoHeader title="Single Preset ranges" />
      <Calendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-08-20`)}
        isConfirmationRow={true}
      />

      <DemoHeader title="Single Time Input" />
      <Calendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-08-20`)}
        selectTime={true}
        isConfirmationRow={true}
      />

      <DemoHeader title="Double Preset ranges" />
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
      />

      <DemoHeader title="Double date input" />
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
        showConfirmationRowInput={true}
        showConfirmationRange={true}
      />

      <DemoHeader title="Mix and Match" />
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
        showConfirmationRange={true}
        // showConfirmationRowInput={true}
      />
      <DemoHeader title="Mix and Match" />
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
        // showConfirmationRange={true}
        showConfirmationRowInput={true}
      />
    </main>
  );
}
