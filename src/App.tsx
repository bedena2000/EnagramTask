import { Routes, Route } from "react-router";
import {
  Home,
  Speller,
  ComparedText,
  VoiceToText,
  TextToVoice,
  PDFConvertation,
  ErrorPage,
} from "./pages/index";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2">
          <Header />
        </div>

        <div className="col-span-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speller" element={<Speller />} />
            <Route path="/compared_text" element={<ComparedText />} />
            <Route path="/voice_to_text" element={<VoiceToText />} />
            <Route path="/text_to_voice" element={<TextToVoice />} />
            <Route path="/pdf_convertation" element={<PDFConvertation />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
