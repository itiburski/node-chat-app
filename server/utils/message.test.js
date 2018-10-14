let expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'Isabel';
    let text = 'Testing message';
    let response = generateMessage(from, text);

    expect(response.from).toBe(from);
    expect(response.text).toBe(text);
    expect(response.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Isabel';
    let latitude = 13;
    let longitude = 25;
    let url = 'https://www.google.com/maps?q=13,25';

    let response = generateLocationMessage(from, latitude, longitude);

    expect(response.from).toBe(from);
    expect(response.url).toBe(url);
    expect(response.createdAt).toBeA('number');
  });
});
