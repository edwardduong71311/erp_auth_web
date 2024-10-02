import Spinner from "./Spinner";

type Props = {
  className?: string;
  text?: string;
  onClick?: () => void;
  spinning?: boolean;
};

export default function Button(props: Props) {
  const alignment = "inline-flex items-center justify-center";
  const border = "rounded-md";
  const background = "bg-blue-950 hover:bg-blue-800 focus:bg-blue-800";
  return (
    <button
      className={`transition-all duration-300 text-white ${alignment} ${border} ${background} ${props.className}`}
      onClick={props.onClick}
    >
      {props.spinning ? <Spinner className="mr-2" /> : <></>}
      {props.text || "Button"}
    </button>
  );
}
