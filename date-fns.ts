import { compareAsc, format } from "https://cdn.skypack.dev/date-fns@^2.16.1";

const formatValue = format(new Date(2014, 1, 11), "yyyy-MM-dd", {});
//=> '2014-02-11'
console.log(formatValue);

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);

console.log(dates);
