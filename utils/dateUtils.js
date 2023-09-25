const addDateSuffix = (date) => {
    let dateStr = date.toString();
  
    const lastChar = dateStr.charAt(dateStr.length - 1);
  
    if (lastChar === '1' && dateStr !== '11') {
      dateStr += 'st';
    } else if (lastChar === '2' && dateStr !== '12') {
      dateStr += 'nd';
    } else if (lastChar === '3' && dateStr !== '13') {
      dateStr += 'rd';
    } else {
      dateStr += 'th';
    }
  
    return dateStr;
  };
  
  const formatDate = (timestamp, options = { monthLength: 'short', dateSuffix: true }) => {
    const months = [
      options.monthLength === 'short' ? 'Jan' : 'January',
      options.monthLength === 'short' ? 'Feb' : 'February',
      options.monthLength === 'short' ? 'Mar' : 'March',
      options.monthLength === 'short' ? 'Apr' : 'April',
      options.monthLength === 'short' ? 'May' : 'May',
      options.monthLength === 'short' ? 'Jun' : 'June',
      options.monthLength === 'short' ? 'Jul' : 'July',
      options.monthLength === 'short' ? 'Aug' : 'August',
      options.monthLength === 'short' ? 'Sep' : 'September',
      options.monthLength === 'short' ? 'Oct' : 'October',
      options.monthLength === 'short' ? 'Nov' : 'November',
      options.monthLength === 'short' ? 'Dec' : 'December',
    ];
  
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
  
    const dayOfMonth = options.dateSuffix
      ? addDateSuffix(dateObj.getDate())
      : dateObj.getDate();
  
    const year = dateObj.getFullYear();
    let hour = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
  
    if (hour === 0) {
      hour = 12;
    }
  
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
  };
  
  module.exports = formatDate;
  