import { menu } from "./HeaderData";
import { enagramLogo } from "../../assets";
import { Link } from "react-router";
import type { MenuItem } from "../../types";
import useHeaderHooks from "./HeaderHooks";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Header() {
  const {
    currentLocation: { pathname },
    currentPathItem,
    handleModal,
    isModal,
    handleMenu,
    isMenu,
  } = useHeaderHooks();

  return (
    <>
      <div className="bg-[#132450] relative flex flex-col items-center justify-between lg:items-start lg:justify-start lg:block px-[30px] py-3 lg:py-0 lg:px-0 lg:pl-[24px] lg:pt-[45px]  h-full">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-3">
            <img src={enagramLogo} alt="enagram_logo" />
            <p className="font-bold">Enagram</p>
          </Link>

          <div className="lg:hidden" onClick={handleMenu}>
            <RxHamburgerMenu
              size={32}
              className="cursor-pointer hover:bg-yellow-50 hover:text-black rounded-sm transition-all p-1"
            />
          </div>
        </div>

        <div className="mt-[50px] hidden lg:flex flex-col gap-8">
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

      {isMenu && (
        <div className="relative border border-b-[#EDEDED] lg:hidden">
          <div className="relative px-[30px] py-[26px]">
            <div>
              <div
                onClick={handleModal}
                className="flex items-center gap-1 cursor-pointer"
              >
                <img src={currentPathItem?.logo} alt={currentPathItem?.title} />
                <p className="text-[#132450] font-bold">
                  {currentPathItem?.title}
                </p>
                {isModal ? (
                  <FaArrowUp size={12} color="black" />
                ) : (
                  <FaArrowDown size={12} color="black" />
                )}
              </div>
            </div>

            {isModal && (
              <div className="flex flex-col gap-6 bg-[#00C7BE] p-4 mt-4 rounded-xl">
                {menu.map((item: MenuItem) => {
                  return (
                    <Link
                      key={item.id}
                      to={`/${item.redirectTo}`}
                      onClick={handleModal}
                      className="px-2 py-2 cursor-pointer bg-transparent border-2 hover:border-2 hover:border-gray-500 border-transparent rounded-2xl"
                    >
                      <div className="flex items-center gap-1 ">
                        <img src={item?.logo} alt={item?.title} />
                        <p className="text-[#132450] font-bold">
                          {item?.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
