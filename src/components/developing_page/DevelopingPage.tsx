import { Link } from "react-router";
import { SiFramework } from "react-icons/si";

export default function DevelopingPage() {
  return (
    <div className="flex items-center justify-center text-black p-4">
      <div className="p-4 rounded-4xl border-2 shadow-2xl flex items-center gap-8 flex-col">
        <SiFramework size={102} className="mx-auto" />
        <p className="font-bold text-center">Sorry, this page is not developed yet</p>

        <Link
          to="/"
          className="px-4 py-2 bg-[#4571E4] text-[14px] leading-[28px] rounded-[6px] text-white font-bold"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
