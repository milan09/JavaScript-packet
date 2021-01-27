let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i += 1){
      if (employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += "</li>"
   }
    statusHTML += '</ul>';
    console.log(statusHTML);
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employess.json');
xhr.send();

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusRoomHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusRoomHTML += '<li class="empty">';
      } else {
        statusRoomHTML += '<li class="full">';
      }
      statusRoomHTML += rooms[i].room;
      statusRoomHTML += '</li>';
    }
    statusRoomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusRoomHTML;
  }
};
roomRequest.open('GET', '../data/rooms.json');
roomRequest.send();