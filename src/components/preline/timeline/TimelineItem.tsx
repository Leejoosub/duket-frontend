export interface TimelineItemProps {
  timestamp: Date;
  title: string;
  details?: string;
  additionalDetails?: string;
  username?: string;
  avatar?: string;
  timestampIcon?: string;

  includeTime?: boolean;
  hoverable?: boolean;
  hoverableLink?: string;
  showTime?: boolean;
  showIcon?: boolean;
}
function TimelineItem(props: TimelineItemProps) {
  return (
    <div
      className={`flex gap-x-3 ${
        props.hoverable
          ? "  relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          : ""
      }`}
    >
      {props.hoverable && props.hoverableLink ? (
        <a
          className="absolute inset-0 z-[1] hover:cursor-pointer"
          href={props.hoverableLink}
          target={"_blank"}
        ></a>
      ) : (
        <></>
      )}
      {/* Left Content */}
      {props.showTime ? (
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500 dark:text-neutral-400">
            {props.timestamp.toLocaleTimeString("en-US", {
              timeZone: "America/New_York",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
      ) : (
        <></>
      )}
      {/* End Left Content */}
      {/*  Icon */}
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
          {props.showIcon && props.avatar ? (
            <img
              className="shrink-0 size-7 rounded-full"
              src={props.avatar}
              alt="Avatar"
            />
          ) : (
            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
          )}
        </div>
      </div>
      {/*  End Icon */}

      {/*  Right Content */}
      <div className="grow pt-0.5 pb-8">
        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {props.details}
        </p>

        {props.username || props.avatar ? (
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            {props.avatar ? (
              <img
                className="shrink-0 size-4 rounded-full"
                src="https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png"
                alt="Avatar"
              />
            ) : (
              <></>
            )}
            {props.username ? props.username : ""}
          </button>
        ) : (
          <></>
        )}
      </div>
      {/*  End Right Content */}
    </div>
  );
}

export default TimelineItem;
