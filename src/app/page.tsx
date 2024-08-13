import DemoHeader from "@/components/DemoHeaders";
import Timeline from "@/components/preline/timeline/Timeline";
import { UNSORTED_TIMELINE_SAMPLE } from "@/constants/sampleData";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DemoHeader title="Basic Usage" />
      <Timeline timeline={UNSORTED_TIMELINE_SAMPLE} collapsable={2} />

      <DemoHeader title="Collapsable" />
      <Timeline timeline={UNSORTED_TIMELINE_SAMPLE} collapsable={2} />

      <DemoHeader title="Hoverable" />
      <Timeline timeline={UNSORTED_TIMELINE_SAMPLE} hoverable={true} />

      <DemoHeader title="With Time" />
      <Timeline timeline={UNSORTED_TIMELINE_SAMPLE} showTime={true} />

      <DemoHeader title="Icons and Avatars" />
      <Timeline
        timeline={UNSORTED_TIMELINE_SAMPLE}
        showTime={true}
        showIcon={true}
      />

      <DemoHeader title="Mix and Match" />
      <Timeline
        timeline={UNSORTED_TIMELINE_SAMPLE}
        showTime={true}
        showIcon={true}
        hoverable={true}
      />
    </main>
  );
}
