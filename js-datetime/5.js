function timeConvert(time) {
  const minute = time % 60;
  const hours = Math.floor(time / 60);

  return `${time} minutes = ${hours} hour(s) and ${minute} minute(s).`;
}

console.log(timeConvert(200));
