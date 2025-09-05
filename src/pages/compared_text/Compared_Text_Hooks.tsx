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

  const updateLeftSideComparedText = (updatedContent: string) => {
    setLeftSideComparedText(updatedContent);
  };

  const updateRightSideComparedText = (updatedContent: string) => {
    setRightSideComparedText(updatedContent);
  };

  // const compareText = () => {
  //   const listOfWordsForOldText = textToCompare.split(" ");
  //   const listOfWordsForUpdatedOne = updatedText.split(" ");

  //   const oldTextWordsCounting: wordObject = {};
  //   const updatedTextWordsCounting: wordObject = {};

  //   const deletedCoordinates: string[] = [];
  //   const updatedCoordinates: string[] = [];

  //   listOfWordsForOldText.map((text: string) => {
  //     if (oldTextWordsCounting[text]) {
  //       oldTextWordsCounting[text] = oldTextWordsCounting[text] + 1;
  //     } else {
  //       oldTextWordsCounting[text] = 1;
  //     }
  //   });

  //   listOfWordsForUpdatedOne.map((text: string) => {
  //     if (updatedTextWordsCounting[text]) {
  //       updatedTextWordsCounting[text] = updatedTextWordsCounting[text] + 1;
  //     } else {
  //       updatedTextWordsCounting[text] = 1;
  //     }
  //   });

  //   Object.keys(oldTextWordsCounting).map((item: string) => {
  //     if (!updatedTextWordsCounting[item]) {
  //       deletedCoordinates.push(item);
  //     }
  //   });

  //   Object.keys(updatedTextWordsCounting).map((item: string) => {
  //     if (!oldTextWordsCounting[item]) {
  //       updatedCoordinates.push(item);
  //     }
  //   });

  //   setDeletedCords(deletedCoordinates);
  //   setUpdatedCords(updatedCoordinates);

  //   setIsCompering(true);
  // };

  // const compareText = () => {
  //   const oldWords = textToCompare.split(" ");
  //   const newWords = updatedText.split(" ");

  //   const oldCount: wordObject = {};
  //   const newCount: wordObject = {};

  //   oldWords.forEach((word) => {
  //     oldCount[word] = (oldCount[word] || 0) + 1;
  //   });

  //   newWords.forEach((word) => {
  //     newCount[word] = (newCount[word] || 0) + 1;
  //   });

  //   const deleted: string[] = [];
  //   const updated: string[] = [];

  //   // Check deleted words (old > new)
  //   Object.keys(oldCount).forEach((word) => {
  //     const diff = oldCount[word] - (newCount[word] || 0);
  //     for (let i = 0; i < diff; i++) {
  //       deleted.push(word);
  //     }
  //   });

  //   // Check newly added words (new > old)
  //   Object.keys(newCount).forEach((word) => {
  //     const diff = newCount[word] - (oldCount[word] || 0);
  //     for (let i = 0; i < diff; i++) {
  //       updated.push(word);
  //     }
  //   });

  //   setDeletedCords(deleted);
  //   setUpdatedCords(updated);

  //   setIsCompering(true);
  // };

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
  };
}
