export const uuid = () => {
  const id = new Date().getMilliseconds();
  return id;
};
