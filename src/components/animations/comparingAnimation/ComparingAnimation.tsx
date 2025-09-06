import { useState, useEffect } from "react";

interface ComparingAnimationProps {
  delay: number;
}

const ComparingAnimation = ({ delay }: ComparingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDelay = (delay * 1000) / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, stepDelay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className="flex w-fit flex-col gap-2 border px-4 py-5 rounded-[64px] border-[#E1E1E1]">
      <div className="flex items-center gap-2">
        <div className="w-[40px] flex items-center justify-center h-[40px] rounded-full bg-transparent border-2 border-[#4571E4]">
          <div className="rounded-full bg-[#4571E4] w-[9px] h-[9px]"></div>
        </div>

        <div>
          <p className="text-[#383A4899] text-[10px] leading-[16px]">
            Converting... Thank you for your patience
          </p>

          <div className="flex items-center gap-2">
            <p className="text-[#383A48] text-base leading-[24px] font-bold">
              {progress}%
            </p>

            <div className="w-full h-2 bg-[#E1E1E1] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4571E4] rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparingAnimation;
