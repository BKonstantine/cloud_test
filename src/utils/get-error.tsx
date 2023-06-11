import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

export const getError = (
  arr: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
): string => {
  if (typeof arr === "string") {
    return arr;
  }
  if (Array.isArray(arr)) {
    return arr.join(" ");
  }
  return "";
};