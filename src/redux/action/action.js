import { FORM_DATA } from "../types";

export const formData = (groupData, termsData) => {
  return {
    type: FORM_DATA,
    payload: {
      groupData,
      termsData,
    },
  };
};
