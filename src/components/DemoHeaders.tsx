interface DemoHeaderProps {
  title: string;
}
function DemoHeader({ title }: DemoHeaderProps) {
  return <p className="font-bold text-3xl m-5">===== {title} =====</p>;
}
export default DemoHeader;
