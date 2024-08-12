import { DatatableData } from "@/components/preline/datatables/Datatable";
import { TimelineItemProps } from "@/components/preline/timeline/TimelineItem";

export const TIMELINE_SAMPLE: TimelineItemProps[] = [
  {
    timestamp: new Date("2023-08-01 12:05:00"),
    title: `Created "Preline in React" task`,
    details: `Find more detailed instructions here.`,
    username: `James Collins`,
    avatar: `https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80`,
  },
  {
    timestamp: new Date("2023-08-01 12:05:05"),
    title: `Release v5.2.0 quick bug fix 🐞`,
    username: `Alex Gregarov`,
    avatar: `https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png`,
  },

  {
    timestamp: new Date("2023-08-01 12:07:00"),
    title: `Marked "Install Charts" completed`,
    username: `James Collins`,
    details: `Finally! You can check it out here.`,
    avatar: `https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png`,
  },
  {
    timestamp: new Date("2023-07-31 23:12:36"),
    title: `Take a break ⛳️`,
    details: `Just chill for now... 😉`,
  },
];

export const UNSORTED_TIMELINE_SAMPLE: TimelineItemProps[] = [
  {
    timestamp: new Date("2023-07-29 23:12:36"),
    title: `Take a break ⛳️`,
    details: `Just chill for now... 😉`,
  },

  {
    timestamp: new Date("2023-08-01 12:05:05"),
    title: `Release v5.2.0 quick bug fix 🐞`,
    username: `Alex Gregarov`,
    avatar: `https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png`,
  },
  {
    timestamp: new Date("2023-08-01 12:05:00"),
    title: `Created "Preline in React" task`,
    details: `Find more detailed instructions here.`,
    username: `James Collins`,
    avatar: `https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png`,
    hoverable: true,
    hoverableLink: "https://www.google.com",
  },

  {
    timestamp: new Date("2023-08-01 12:07:00"),
    title: `Marked "Install Charts" completed`,
    username: `James Collins`,
    details: `Finally! You can check it out here.`,
    avatar: `https://www.shareicon.net/data/2015/05/07/34701_man_400x400.png`,
    hoverable: true,
    hoverableLink: "https://www.google.com",
  },

  {
    timestamp: new Date("2023-07-30 10:45:00"),
    title: `Final Touch ups`,
    details: `Double check everything and make sure we're ready to go.`,
    hoverable: true,
    hoverableLink: "https://www.google.com",
  },

  {
    timestamp: new Date("2023-07-31 10:45:00"),
    title: `Final Touch ups`,
    details: `Double check everything and make sure we're ready to go.`,
    hoverable: true,
    hoverableLink: "https://www.google.com",
  },
];

// Datatable Data
export const SAMPLE_DATATABLE_DATA: DatatableData[] = [
  {
    name: "Christina Bersh",
    age: 45,
    address: "4222 River Rd, Columbus",
  },
  {
    name: "David Harrison",
    age: 27,
    address: "123 charming ave",
  },
  {
    name: "Anne Richard",
    age: 27,
    address: "2952 S Peoria Ave, Tulsa",
  },
  {
    name: "Samia Kartoon	",
    age: 31,
    address: "255 Dock Ln, New Tazewell",
  },
  {
    name: "Samia Kartoon",
    age: 45,
    address: "4970 Park Ave W, Ohio",
  },
  {
    name: "Brian Halligan",
    age: 31,
    address: "2952 S Peoria Ave, Tulsa",
  },

  {
    name: "Andy Clerk",
    age: 45,
    address: "1818 H St NW, Washington",
  },

  {
    name: "Bart Simpson",
    age: 27,
    address: "3 Grace Dr, New Mexico",
  },

  {
    name: "Camila Welters",
    age: 45,
    address: "4531 W Saile Dr, North Dakota",
  },

  {
    name: "Oliver Schevich",
    age: 27,
    address: "2126 N Eagle, Meridian, Illinois",
  },

  {
    name: "Inna Ivy",
    age: 31,
    address: "3817 Beryl Rd, Nebraska",
  },

  {
    name: "Jessica Williams",
    age: 27,
    address: "4807 3rd Ave, New Hampshire",
  },

  {
    name: "James Collins",
    age: 31,
    address: "Melbourne No. 1 Lake Park",
  },

  {
    name: "Costa Quinn",
    age: 27,
    address: "New York No. 1 Lake Park",
  },
];
