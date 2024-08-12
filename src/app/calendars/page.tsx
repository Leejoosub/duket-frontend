"use client";

import Calendar from "@/components/preline/datePicker/Calendar";
import DoubleCalendar from "@/components/preline/datePicker/DoubleCalendar";
export default function page() {
  return (
    <main>
      <p className="font-bold text-3xl text-red-400"> ===== Basic ===== </p>
      <Calendar />
      <p className="font-bold text-3xl text-red-400">
        {" "}
        ===== Single Preset ranges ====={" "}
      </p>
      <Calendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-08-20`)}
        isConfirmationRow={true}
      />

      <p className="font-bold text-3xl text-red-400">
        {" "}
        ===== Single Time Input ====={" "}
      </p>
      <Calendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-08-20`)}
        selectTime={true}
        isConfirmationRow={true}
      />

      <p className="font-bold text-3xl text-red-400">
        ===== Double Preset ranges =====
      </p>
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
      />

      <p className="font-bold text-3xl text-red-400">
        ===== Double date input =====
      </p>
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
        showConfirmationRowInput={true}
        showConfirmationRange={true}
      />

      {/* <p className="font-bold text-3xl text-red-400">
        ===== Double Preset ranges =====
      </p>
      <DoubleCalendar
        isRange={true}
        date1={new Date(`2024-08-3`)}
        date2={new Date(`2024-09-20`)}
        isConfirmationRow={true}
        showConfirmationRange={true}
        showConfirmationRowInput={true}
      /> */}
    </main>
  );
}
