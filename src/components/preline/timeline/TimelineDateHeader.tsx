interface TimelineDateheaderProps {
  timestamp: Date;
}

function TimelineDateHeader(props: TimelineDateheaderProps) {
  return (
    // {/*  Heading */}
    <div className="ps-2 my-2 first:mt-0">
      <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
        {props.timestamp.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </h3>
    </div>
  );
}

export default TimelineDateHeader;
