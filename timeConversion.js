// Given a time in -hour 12 AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// input = 07:05:45PM
// output = 19:05:45

function timeConversion(s) {
  // Write your code here
  let isDay = s.slice(-2,10);
  const hour = parseInt(s.slice(0,2));
  
  if (isDay == 'AM'){
      return hour === 12 ? `00${s.slice(2,8)}` : s.slice(0,8)
  } else {
      return hour === 12 ? s.slice(0,8) :`${hour+12}${s.slice(2,8)}`
  }
}



// function timeConversion(s) {
//   // Write your code here
  
//   const timeOfDay = s.slice(8)
  
//   if(timeOfDay === "PM"){
//       const hr = parseInt(s.slice(0,2))
//       return hr === 12? s.slice(0,8):(hr+12) + s.slice(2,8);
//   }else{
//       const hr = parseInt(s.slice(0,2))
//       return hr === 12? "00"+s.slice(2,8) :s.slice(0,8)
//   }

// }