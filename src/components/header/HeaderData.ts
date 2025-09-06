import {
  checkLogo,
  comparedTextLogo,
  pdfConvertationLogo,
  textToVoiceLogo,
  voiceToTextLogo,
} from "../../assets/index";
import type { MenuItem } from "../../types";

export const menu: MenuItem[] = [
  {
    id: 1,
    logo: checkLogo,
    redirectTo: "speller",
    title: "მართლმწერი",
  },
  {
    id: 2,
    logo: comparedTextLogo,
    redirectTo: "compared_text",
    title: "ტექსტის შედარება",
  },
  {
    id: 3,
    logo: voiceToTextLogo,
    redirectTo: "voice_to_text",
    title: "ხმა",
  },
  {
    id: 4,
    logo: textToVoiceLogo,
    redirectTo: "text_to_voice",
    title: "ტექსტი",
  },
  {
    id: 5,
    logo: pdfConvertationLogo,
    redirectTo: "pdf_convertation",
    title: "PDF კონვერტაცია",
  },
];
