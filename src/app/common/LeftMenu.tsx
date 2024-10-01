type Props = {
  className?: string;
};

export default function LeftMenu(props: Props) {
  return (
    <div
      className={`transition-all duration-300	fixed z-20 h-screen ${props.className}`}
    ></div>
  );
}
