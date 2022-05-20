const formatTime = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substring(14, 19);
};

export default formatTime;
