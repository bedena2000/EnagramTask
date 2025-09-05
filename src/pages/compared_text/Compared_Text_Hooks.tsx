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

  const updateLeftSideComparedText = (updatedContent: string) => {
    setLeftSideComparedText(updatedContent);
  };

  const updateRightSideComparedText = (updatedContent: string) => {
    setRightSideComparedText(updatedContent);
  };

  const compareText = () => {
    const listOfWordsForOldText = textToCompare.split(" ");
    const listOfWordsForUpdatedOne = updatedText.split(" ");

    const oldTextWordsCounting: wordObject = {};
    const updatedTextWordsCounting: wordObject = {};

    const deletedCoordinates: string[] = [];
    const updatedCoordinates: string[] = [];

    listOfWordsForOldText.map((text: string) => {
      if (oldTextWordsCounting[text]) {
        oldTextWordsCounting[text] = oldTextWordsCounting[text] + 1;
      } else {
        oldTextWordsCounting[text] = 1;
      }
    });

    listOfWordsForUpdatedOne.map((text: string) => {
      if (updatedTextWordsCounting[text]) {
        updatedTextWordsCounting[text] = updatedTextWordsCounting[text] + 1;
      } else {
        updatedTextWordsCounting[text] = 1;
      }
    });

    Object.keys(oldTextWordsCounting).map((item: string) => {
      if (!updatedTextWordsCounting[item]) {
        deletedCoordinates.push(item);
      }
    });

    Object.keys(updatedTextWordsCounting).map((item: string) => {
      if (!oldTextWordsCounting[item]) {
        updatedCoordinates.push(item);
      }
    });

    setDeletedCords(deletedCoordinates);
    setUpdatedCords(updatedCoordinates);

    setIsCompering(true);
  };

  const resetCompering = () => {
    setLeftSideComparedText("");
    setRightSideComparedText("");
    setDeletedCords([]);
    setUpdatedCords([]);
    setIsCompering(false);
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
  };
}
