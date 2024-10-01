import Spinner from "./Spinner";

type Props = {
  className?: string;
  text?: string;
  onClick?: () => void;
  spinning?: boolean;
};

export default function Button(props: Props) {
  const style =
    "inline-flex items-center justify-center transition-all duration-500 rounded-md bg-base-700 hover:bg-hover focus:bg-focus text-white";
  return (
    <button className={`${style} ${props.className}`} onClick={props.onClick}>
      {props.spinning ? <Spinner className="mr-2" /> : <></>}
      {props.text || "Button"}
    </button>
  );
}
