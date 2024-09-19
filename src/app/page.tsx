import Image from "next/image";
import BigLogo from "@/public/image/erp.png";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={BigLogo} alt="ERP Logo" width={180} height={38} priority />
      <>{process.env.NEXT_PUBLIC_APP_URL}</>
    </div>
  );
}
