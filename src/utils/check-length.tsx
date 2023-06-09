export const checkLength = (value: string ): number => {
  return value?.replace(/\s+/g, "").length;
};
