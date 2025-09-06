import { CgArrowsHAlt } from "react-icons/cg";
import useComparedTextHooks from "./Compared_Text_Hooks";
import { plusButtonLogo } from "../../assets";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import ComparingAnimation from "../../components/animations/comparingAnimation/ComparingAnimation";

export default function ComparedText() {
  const hooks = useComparedTextHooks();

  return (
    <div className="text-black p-6">
      {/* Controllers */}
      <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#EDEDED]">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="relative">
            <button
              onClick={hooks.handleLanguage}
              className="border-2 flex gap-[35px] items-center border-[#E0E0E0] transition-all hover:bg-[#E0E0E0] rounded-[8px] cursor-pointer text-[#383A48] px-3.5 py-[9px]"
            >
              <p>ქართული</p>
              {hooks.languageModal ? (
                <FaArrowUp size={14} />
              ) : (
                <FaArrowDown size={14} />
              )}
            </button>

            {hooks.languageModal && (
              <div className="border-[#4571E4] flex flex-col gap-2 border-2 bg-white absolute z-10 top-12 rounded-[8px] px-3 py-[18px] w-full left-0">
                <div className="flex items-center gap-1">
                  <div
                    onClick={hooks.handleLanguage}
                    className="w-[12px] cursor-pointer h-[12px] border border-[#E0E0E0] rounded-full bg-transparent hover:bg-[#E0E0E0]"
                  ></div>
                  <p className="text-[#383A48] text-[12px]">ქართული</p>
                </div>

                <div className="flex items-center gap-1">
                  <div
                    onClick={hooks.handleLanguage}
                    className="w-[12px] cursor-pointer h-[12px] border border-[#E0E0E0] rounded-full bg-transparent hover:bg-[#E0E0E0]"
                  ></div>
                  <p className="text-[#383A48] text-[12px]">ქართული</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div
              onClick={hooks.handleFormat}
              className="flex items-center justify-center w-[20px] h-[20px] bg-transparent border cursor-pointer border-[#E0E0E0] rounded-[4px]"
            >
              {hooks.isFormat && <FaCheck size={14} />}
            </div>
            <p className="text-[#383A48] text-[14px]">ფორმატის შენარჩუნება</p>
          </div>
        </div>

        <div>
          <button
            className={`px-[16px] w-full md:w-auto py-[7px] flex items-center gap-1 leading-7 rounded-[6px] ${
              !hooks.isCompering || hooks.isLoading
                ? "bg-[#383A4899]"
                : "bg-[#4571E4] hover:bg-[#5856D6] cursor-pointer"
            }  text-white`}
            onClick={hooks.resetCompering}
            disabled={!hooks.isCompering}
          >
            <img src={plusButtonLogo} alt="plus_button" />
            <p>ახლის გახსნა</p>
          </button>
        </div>
      </div>

      {hooks.isLoading ? (
        <div className="mx-auto mt-[200px] mb-[200px] w-fit">
          <ComparingAnimation delay={6} />
        </div>
      ) : !hooks.isCompering ? (
        <div className="flex flex-col md:flex-row items-center gap-2.5 h-[543px] mt-[24px]">
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
        <div className="flex flex-col md:flex-ro items-center gap-2.5 h-[543px] mt-[24px]">
          <div className="resize-none overflow-scroll flex-wrap bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]">
            {hooks.textToCompare
              .split(" ")
              .map((item: string, index: number) => {
                if (hooks.deletedCords.includes(index.toString())) {
                  return (
                    <span
                      key={`old-${index}`}
                      className="inline-block bg-red-600 text-white mr-[7px] px-1 rounded"
                    >
                      {item}
                    </span>
                  );
                }
                return (
                  <span key={`old-${index}`} className="inline-block mr-[7px]">
                    {item}
                  </span>
                );
              })}
          </div>

          <div className="w-[32px] h-[32px] ">
            <CgArrowsHAlt className="w-full h-full object-contain " />
          </div>

          <div className="resize-none overflow-scroll flex-wrap bg-[#F0F7FF] h-full w-full rounded-lg p-3 text-lg leading-[26px] flex-6 text-[#383A48]">
            {hooks.updatedText.split(" ").map((item: string, index: number) => {
              if (hooks.updatedCords.includes(index.toString())) {
                return (
                  <span
                    key={`new-${index}`}
                    className="inline-block bg-green-500 text-white mr-[7px] px-1 rounded"
                  >
                    {item}
                  </span>
                );
              }
              return (
                <span key={`new-${index}`} className="inline-block mr-[7px]">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Compare Button */}
      <div className="mt-8">
        <button
          className={`text-sm px-[37px] py-2.5 ${
            hooks.isCompering || hooks.isLoading
              ? "bg-[#383A4899] "
              : "bg-[#4571E4] hover:bg-[#5856D6] cursor-pointer"
          }  rounded-[6px] text-white  leading-7 mx-auto block`}
          onClick={hooks.compareText}
          disabled={hooks.isCompering || hooks.isLoading}
        >
          შედარება
        </button>
      </div>
    </div>
  );
}
