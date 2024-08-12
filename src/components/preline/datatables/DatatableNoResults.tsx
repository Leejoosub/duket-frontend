function DatatableNoResults() {
  return (
    <div className="py-10 px-5 flex flex-col justify-center items-center text-center w-full">
      <svg
        className="shrink-0 size-6 text-gray-500 dark:text-neutral-500"
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <div className="max-w-sm mx-auto">
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          No search results
        </p>
      </div>
    </div>
  );
}

export default DatatableNoResults;
