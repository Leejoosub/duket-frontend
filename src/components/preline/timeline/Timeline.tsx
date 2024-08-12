"use client";

import { useEffect, useMemo, useState } from "react";
import TimelineDateHeader from "./TimelineDateHeader";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  timeline: TimelineItemProps[];

  includeTime?: boolean;
  collapsable?: number; // how many items to display at a time
  hoverable?: boolean;
  showTime?: boolean;
  showIcon?: boolean;
}

function Timeline(props: TimelineProps) {
  // if collapsable value provided, only show the first X displayLength
  const [displayLength, setDisplayLength] = useState(
    props.collapsable && props.collapsable > 0
      ? props.collapsable
      : props.timeline.length
  );

  const [sortedTimelineJsx, collapsableTimelineJsx] = useMemo(() => {
    const sortedTimeline = [...props.timeline];

    sortedTimeline.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );

    const jsx = [];
    const collapsableJsx = [];
    let mostRecentDate = new Date(0);

    const loopLength = props.collapsable
      ? Math.min(sortedTimeline.length, displayLength + props.collapsable)
      : sortedTimeline.length;

    for (let index = 0; index < loopLength; index++) {
      const item = sortedTimeline[index];
      // If the date isn't the same as the previous item, add a new date header
      if (
        item.timestamp.getFullYear() != mostRecentDate.getFullYear() ||
        item.timestamp.getMonth() != mostRecentDate.getMonth() ||
        item.timestamp.getDate() != mostRecentDate.getDate()
      ) {
        jsx.push(
          <TimelineDateHeader
            key={"dateHeader_" + item.timestamp.toString()}
            timestamp={item.timestamp}
          />
        );
        mostRecentDate = item.timestamp;
      }

      // add item
      if (index <= displayLength) {
        jsx.push(
          <TimelineItem
            key={`TimelineItem_${item.username}_${item.timestamp.toString()}`}
            timestamp={item.timestamp}
            title={item.title}
            details={item.details}
            additionalDetails={item.additionalDetails}
            username={item.username}
            avatar={item.avatar}
            timestampIcon={item.timestampIcon}
            includeTime={props.includeTime}
            hoverable={props.hoverable}
            hoverableLink={item.hoverableLink}
            showTime={props.showTime}
            showIcon={props.showIcon}
          />
        );
      } else {
        collapsableJsx.push(
          <TimelineItem
            key={`collapsableTimelineItem_${
              item.username
            }_${item.timestamp.toString()}`}
            timestamp={item.timestamp}
            title={item.title}
            details={item.details}
            additionalDetails={item.additionalDetails}
            username={item.username}
            avatar={item.avatar}
            timestampIcon={item.timestampIcon}
            includeTime={props.includeTime}
            hoverable={props.hoverable}
            hoverableLink={item.hoverableLink}
            showTime={props.showTime}
            showIcon={props.showIcon}
          />
        );
      }
    }

    return [jsx, collapsableJsx];
  }, [props.timeline, displayLength]);

  return (
    <>
      <div className="w-full duration-500 transition-[height]">
        {sortedTimelineJsx}
        {/*  Collapse */}
      </div>
      {props.collapsable && 0 < collapsableTimelineJsx.length ? (
        <>
          <div
            id="hs-timeline-collapse"
            aria-labelledby="hs-timeline-collapse-content"
          >
            {collapsableTimelineJsx}
          </div>
          <div className="ps-[7px] flex gap-x-3">
            <button
              type="button"
              className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
              id="hs-timeline-collapse-content"
              aria-expanded="false"
              aria-controls="hs-timeline-collapse"
              data-hs-collapse="#hs-timeline-collapse"
              onClick={() =>
                setDisplayLength(displayLength + (props.collapsable ?? 1))
              }
            >
              <svg
                className="shrink-0 size-3.5"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              Show older
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Timeline;
