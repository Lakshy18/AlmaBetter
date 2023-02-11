import { FORM_DATA, SHOW_FLASH_CARD } from "../types";

export const formData = (groupData, termsData) => {
  return {
    type: FORM_DATA,
    payload: {
      groupData,
      termsData,
    },
  };
};

export const showCardData = (cardNum) => {
  return {
    type: SHOW_FLASH_CARD,
    payload: cardNum,
  };
};
