import { useUserContext } from "@/state/UserContext";

type Props = {
  className?: string;
};

export default function Header(props: Props) {
  const { doLogout, getBreadcrumb } = useUserContext();
  return (
    <div className={`flex items-center sticky top-0 z-10 ${props.className}`}>
      <div className="flex-1">{getBreadcrumb()}</div>
      <span className="cursor-pointer" onClick={doLogout}>
        Log out
      </span>
    </div>
  );
}
