let socket = io()

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').click(() => {
  socket.emit('login', {
    username: $('#inpUsername').val(),
  })
})

socket.on('logged_in', () => {
  $('#loginBox').hide()
  $('#chatBox').show()
})

$('#btnSendMsg').click(() => {
  socket.emit('msg_send', {
    to: $('#inpToUser').val(),
    msg: $('#inpNewMsg').val()
  })
})

socket.on('msg_rcvd', (data) => {
  $('#ulMsgs').append($('<li>').text(data.msg))
})
