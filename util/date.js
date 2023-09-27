// get formatted date with format YYYY-MM-DD
export function getDateStr(d) {
  if (!d) {
    return
  }

  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const str = `${year}-${padZero(month + 1)}-${padZero(date)}`;

  return str;
}

function padZero(i) {
  if (i < 10) {
    return "0" + i.toString()
  }
  return i
}
