function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  //split string with '/' to divide up the m/d/yr in array
  let arr = userDate.split("/");

  //last item = yr, 2nd item = day, 1st item = month
  let yr = arr[2];

  //if day or month values are only one number long, add a 0 before it
  let day = arr[1].length === 1 ? `0${arr[1]}` : arr[1];
  let month = arr[0].length === 1 ? `0${arr[0]}` : arr[0];

  return `${yr}${month}${day}`;
}
