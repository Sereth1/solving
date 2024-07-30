function timeToNumber(time) {
  const [hour, min, sec] = time.split(":").map(Number);
  return hour, min, sec;
}

console.log(timeToNumber("02:20:00"));

function videoPart(part, total) {}

videoPart("02:20:00", "07:00:00");
