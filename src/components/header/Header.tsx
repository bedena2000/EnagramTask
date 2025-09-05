import { menu } from "./HeaderData";
import { enagramLogo } from "../../assets";
import { Link } from "react-router";
import type { MenuItem } from "../../types";
import useHeaderHooks from "./HeaderHooks";

export default function Header() {
  const {
    currentLocation: { pathname },
  } = useHeaderHooks();

  return (
    <div className="bg-[#132450] pl-[24px] pt-[45px] h-full">
      <Link to="/" className="flex items-center gap-3">
        <img src={enagramLogo} alt="enagram_logo" />
        <p className="font-bold">Enagram</p>
      </Link>

      <div className="mt-[50px] flex flex-col gap-8">
        {menu.map((item: MenuItem) => {
          const classesOnActive =
            pathname === `/${item.redirectTo}`
              ? "bg-white text-[#132450] font-bold rounded-r-none"
              : "";

          return (
            <Link
              className={`flex items-center gap-3 bg-transparent border border-transparent transition-all hover:border rounded-2xl px-2 py-4 hover:border-white ${classesOnActive}`}
              to={`/${item.redirectTo}`}
              key={item.id}
            >
              <img src={item.logo} alt={item.title} />
              <p className="font-regular">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
