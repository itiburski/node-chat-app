let expect = require('expect');

const {generateMessage} = require('./message');

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
