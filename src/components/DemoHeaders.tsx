interface DemoHeaderProps {
  title: string;
}
function DemoHeader({ title }: DemoHeaderProps) {
  return <p className="font-bold text-3xl text-red-400">===== {title} =====</p>;
}
export default DemoHeader;
