

const numberConversions = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
}; 

function guardOverflow(num) {
  if (num > 12) {
    return 1 
  } 
  return num
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  if (time === '0:00') {
    return 'midnight';
  }
  
  if (time === '12:00') {
    return 'midday';
  }

  const timeSplit = time.split(':').map(num => Number(num));

  if (timeSplit[1] === 30) {
    // half past
    return `half past ${numberConversions[timeSplit[0]]}`;
  }
  
  if (timeSplit[1] < 30 && timeSplit[1] !== 0) {
    // counting past the hour
    return `${numberConversions[timeSplit[1]]} past ${numberConversions[timeSplit[0]]}`;
  }
  
  if (timeSplit[1] > 30) {
    // counting to the next hour
    // console.log(timeSplit)
    const remainingTime = 60 - timeSplit[1]
    return `${numberConversions[remainingTime]} to ${numberConversions[guardOverflow(timeSplit[0] + 1)]}`;
  }

  // on the hour
  return `${numberConversions[timeSplit[0]]} o'clock`

}

module.exports = { convertTimeToWords };