import { SHOW_SPINNER, HIDE_SPINNER } from "../constants";

export const ShowSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const HideSpinner = () => {
  return {
    type: HIDE_SPINNER,
  };
};
