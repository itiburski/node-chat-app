const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Isabel',
      room: 'room name'
    }
    let response = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it ('should remove a user', () => {
    let userId = '2';
    let response = users.removeUser(userId);

    expect(response.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it ('should not remove a user', () => {
    let userId = '4'
    let response = users.removeUser(userId);
    
    expect(response).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it ('should find user', () => {
    let userId = '3'
    let response = users.getUser(userId);

    expect(response.id).toBe(userId);
  });

  it ('should not find user', () => {
    let userId = '4'
    let response = users.getUser(userId);

    expect(response).toNotExist();
  });

  it ('should return names for Node Course', () => {
    let response = users.getUserList('Node Course');
    expect(response).toEqual(['Mike', 'Julie']);
  });

  it ('should return names for React Course', () => {
    let response = users.getUserList('React Course');
    expect(response).toEqual(['Jen']);
  });


});
