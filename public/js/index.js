var socket = io();

socket.on('connect', function() {
  socket.emit('requestRoomList');
});

socket.on('updateRoomList', function(rooms) {
  console.log(rooms);
  var roomList = jQuery('#room-list');
  console.log(roomList);

  rooms.forEach(function(roomName){
    // roomList.append(jQuery('option')).attr('value').text = roomName;
    // roomList.append(jQuery('<option></option>')).attr('value').text = roomName;
    roomList.append("<option value='" + roomName + "'>");
    // $('#potentials').append("<option value='" + nameArray[i] + "'>");

  })
  // room-list
});
