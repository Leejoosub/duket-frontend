import TimelineCollapsableExample from "@/components/examples/TimelineCollapsableExample";
import TimelineExample from "@/components/examples/TimelineExample";
import TimelineHoverableExample from "@/components/examples/TimelineHoverableExample";
import Timeline from "@/components/preline/timeline/Timeline";
import {
  TIMELINE_SAMPLE,
  UNSORTED_TIMELINE_SAMPLE,
} from "@/constants/sampleData";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p className="text-xl font-bold">UNSORTED TIMELINE</p>
      <Timeline
        timeline={UNSORTED_TIMELINE_SAMPLE}
        collapsable={2}
        hoverable={true}
        showTime={true}
        showIcon={true}
      />
    </main>
  );
}
