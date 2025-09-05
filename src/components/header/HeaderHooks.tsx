import { useLocation } from "react-router";

export default function useHeaderHooks() {
  const currentLocation = useLocation();

  return {
    currentLocation,
  };
}
