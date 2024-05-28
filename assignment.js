// RGB to HEX - https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b) {
  let hex = "";
  [r, g, b].forEach((number) => {
    number = Math.min(number, 255);
    number = Math.max(number, 0);
    hex += number.toString(16).padStart(2, "0");
  });
  return hex.toUpperCase();
}

// Who likes it? - https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// Human readable time - https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}

// Leap years - https://www.codewars.com/kata/526c7363236867513f0005ca
function isLeapYear(year) {
  let isLeap = false;

  if (year % 4 === 0) isLeap = true;

  if (year % 100 === 0) isLeap = false;

  if (year % 400 === 0) isLeap = true;

  return isLeap;
}
