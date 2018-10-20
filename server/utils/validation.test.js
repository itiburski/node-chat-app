const expect = require('expect');

const {isRealString} = require('./validation');

// CHALLENGE
// isRealString
  // should reject non-string values
  // should reject strings with only spaces
  // should allow string with non-space characters

describe('isRealString', () => {

  it('should reject non-string values', () => {
    let response = isRealString(1234);
    expect(response).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    let response = isRealString('     ');
    expect(response).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    let response = isRealString('   valid value   ');
    expect(response).toBe(true);
  });

});
