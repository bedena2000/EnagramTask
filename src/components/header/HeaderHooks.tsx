import { useLocation } from "react-router";
import { menu } from "./HeaderData";
import type { MenuItem } from "../../types";
import { useState } from "react";

export default function useHeaderHooks() {
  const [isModal, setIsModal] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const currentLocation = useLocation();

  const currentPathItem = menu.find(
    (menuItem: MenuItem) =>
      `/${menuItem.redirectTo}` === currentLocation.pathname
  );

  const handleModal = () => setIsModal(!isModal);
  const handleMenu = () => setIsMenu(!isMenu);

  return {
    currentLocation,

    currentPathItem,
    handleModal,
    isModal,

    handleMenu,
    isMenu
  };
}
