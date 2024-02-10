export const getTimeFomatted = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let formattedHours = hours % 12 || 12;
  const amPm = hours >= 12 ? "pm" : "am";
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedTime = `${formattedHours}:${formattedMinutes} ${amPm}`;
  return formattedTime;
};
