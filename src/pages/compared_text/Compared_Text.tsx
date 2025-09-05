import { CgArrowsHAlt } from "react-icons/cg";
import useComparedTextHooks from "./Compared_Text_Hooks";
import { plusButtonLogo } from "../../assets";

export default function ComparedText() {
  const hooks = useComparedTextHooks();

  return (
    <div className="text-black p-6">
      {/* Controllers */}
      <div className="pb-4 border-b border-[#EDEDED]">
        <div>
          <button
            className={`px-[16px] py-[7px] flex items-center gap-1 leading-7 rounded-[6px] ${
              !hooks.isCompering
                ? "bg-[#383A4899]"
                : "bg-[#4571E4] hover:bg-[#5856D6]"
            } cursor-pointer text-white`}
            onClick={hooks.resetCompering}
            disabled={!hooks.isCompering ? true : false}
          >
            <img src={plusButtonLogo} alt="plus_button" />
            <p>ახლის გახსნა</p>
          </button>
        </div>
      </div>

      {/* Content */}
      {!hooks.isCompering ? (
        <div className="flex items-center gap-2.5 h-[543px] mt-[24px]">
          <textarea
            name="compared_text_left_side_content"
            className="resize-none bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]"
            value={hooks.textToCompare}
            onChange={(event) =>
              hooks.updateLeftSideComparedText(event.target.value)
            }
            placeholder="დაიწყე წერა"
          ></textarea>
          <div className="w-[32px] h-[32px] ">
            <CgArrowsHAlt className="w-full h-full object-contain " />
          </div>
          <textarea
            name="compared_text_right_side_content"
            className="resize-none bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]"
            value={hooks.updatedText}
            onChange={(event) =>
              hooks.updateRightSideComparedText(event.target.value)
            }
            placeholder="დაიწყე წერა"
          ></textarea>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 h-[543px] mt-[24px]">
          <div className="resize-none bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]">
            {hooks.textToCompare.split(" ").map((item: string) => {
              if (hooks.deletedCords.includes(item)) {
                return (
                  <span
                    key={`${Math.random()}-${item}`}
                    className="inline-block bg-red-900 text-white mr-[7px]"
                  >
                    {item}
                  </span>
                );
              } else {
                return (
                  <span
                    key={`${Math.random()}-${item}`}
                    className="inline-block mr-[7px]"
                  >
                    {item}
                  </span>
                );
              }
            })}
          </div>
          <div className="w-[32px] h-[32px] ">
            <CgArrowsHAlt className="w-full h-full object-contain " />
          </div>
          <div className="resize-none bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]">
            {hooks.updatedText.split(" ").map((item: string) => {
              if (hooks.updatedCords.includes(item)) {
                return (
                  <span
                    key={`${Math.random()}-${item}`}
                    className="inline-block bg-green-400 text-white mr-[7px]"
                  >
                    {item}
                  </span>
                );
              } else {
                return (
                  <span
                    key={`${Math.random()}-${item}`}
                    className="inline-block mr-[7px]"
                  >
                    {item}
                  </span>
                );
              }
            })}
          </div>
        </div>
      )}

      <div className="mt-8">
        <button
          className={`text-sm px-[37px] py-2.5 ${
            hooks.isCompering
              ? "bg-[#383A4899] "
              : "bg-[#4571E4] hover:bg-[#5856D6] cursor-pointer"
          }  rounded-[6px] text-white  leading-7 mx-auto block`}
          onClick={hooks.compareText}
          disabled={hooks.isCompering ? true : false}
        >
          შედარება
        </button>
      </div>
    </div>
  );
}
