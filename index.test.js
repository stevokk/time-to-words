const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it(`Handles o'clock`, () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe(`two o'clock`);
  });

  it(`Handles minutes after hour`, () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe(`three past two`);
  });

  it(`Handles 15 minutes after hour`, () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe(`quarter past two`);
  });

  it(`Handles 20 minutes to the hour`, () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe(`twenty to three`);
  });

  it(`Handles 5 minutes to the hour`, () => {
    const timeInWords = convertTimeToWords('12:45');
    expect(timeInWords).toBe(`quarter to one`);
  });
  
  // - '2:11' > 'eleven past two'
  // - '2:15' > 'quarter past two' 
  // - '2:30' > 'half past two'

  // - '2:33' > 'twenty seven to three'
  // - '2:40' > 'twenty to three'
  // - '2:45' > 'quarter to three' 
  // - '2:55' > 'five to three'

});
