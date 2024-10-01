type Props = {
  className?: string;
};

export default function Header(props: Props) {
  return (
    <div className={`flex items-center sticky top-0 z-10 ${props.className}`}>
      Header
    </div>
  );
}
