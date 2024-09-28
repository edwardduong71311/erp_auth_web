import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  type?: "text" | "password";
  value: string;
  className?: string;
  placeholer?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: Function;
};

export default function TextInput(props: Props) {
  const style =
    "rounded-md transition-all duration-300 focus:outline focus:outline-indigo-100 focus:outline-offset-4 focus:shadow-md";
  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props?.onEnter?.();
    }
  };

  return (
    <input
      type={props.type || "text"}
      className={`${style} ${props.className}`}
      placeholder={props.placeholer || ""}
      value={props.value}
      onChange={props.onChange}
      onKeyUp={onKeyUp}
    />
  );
}
