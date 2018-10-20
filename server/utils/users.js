[{
  id: '423j4k3l24j23kl4jl2',
  name: 'User name',
  room: 'room name'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    let user = this.getUser(id);
    if (user) {
      let newUsers = this.users.filter((user) => user.id !== id);
      this.users = newUsers;
    }
    return user;
  }

  getUser(id) {
    let user = this.users.filter((user) => user.id === id);
    return user[0];
  }

  getUserList(room) {
    let users = this.users.filter((user) => user.room === room);
    let namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = { Users }
