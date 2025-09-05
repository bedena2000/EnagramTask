import { useState } from "react";

interface wordObject {
  [key: string]: number;
}

export default function useComparedTextHooks() {
  const [textToCompare, setLeftSideComparedText] = useState("");
  const [updatedText, setRightSideComparedText] = useState("");
  const [deletedCords, setDeletedCords] = useState<string[]>([]);
  const [updatedCords, setUpdatedCords] = useState<string[]>([]);
  const [isCompering, setIsCompering] = useState(false);
  const [hasComperedOnce, setHasComperedOnce] = useState(false);
  const [isFormat, setIsFormat] = useState(false);

  const [languageModal, setLanguageModal] = useState(false);

  const handleLanguage = () => setLanguageModal(!languageModal);
  const handleFormat = () => setIsFormat(!isFormat);

  const updateLeftSideComparedText = (updatedContent: string) => {
    setLeftSideComparedText(updatedContent);
  };

  const updateRightSideComparedText = (updatedContent: string) => {
    setRightSideComparedText(updatedContent);
  };

  const compareText = () => {
    setHasComperedOnce(true);
    const oldWords = textToCompare.split(" ");
    const newWords = updatedText.split(" ");

    const oldCount: wordObject = {};
    const newCount: wordObject = {};

    const deleted: number[] = []; // store indices of deleted words
    const updated: number[] = []; // store indices of new words

    // Count words
    oldWords.forEach((word) => {
      oldCount[word] = (oldCount[word] || 0) + 1;
    });
    newWords.forEach((word) => {
      newCount[word] = (newCount[word] || 0) + 1;
    });

    // Find deleted words (by index)
    oldWords.forEach((word, idx) => {
      if (!newCount[word]) {
        deleted.push(idx);
      } else {
        newCount[word]--; // consume one occurrence
      }
    });

    // Find new words (by index)
    newWords.forEach((word, idx) => {
      if (!oldCount[word]) {
        updated.push(idx);
      } else {
        oldCount[word]--; // consume one occurrence
      }
    });

    setDeletedCords(deleted.map(String)); // store as string[] (your current type)
    setUpdatedCords(updated.map(String));
    setIsCompering(true);
  };

  const resetCompering = () => {
    setLeftSideComparedText("");
    setRightSideComparedText("");
    setDeletedCords([]);
    setUpdatedCords([]);
    setIsCompering(false);
    setHasComperedOnce(false);
  };

  return {
    textToCompare,
    updatedText,
    updateLeftSideComparedText,
    updateRightSideComparedText,

    compareText,

    deletedCords,
    updatedCords,

    isCompering,

    resetCompering,
    hasComperedOnce,

    languageModal,
    handleLanguage,

    isFormat,
    handleFormat,
  };
}
