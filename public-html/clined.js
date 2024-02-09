

socket = io.connect('http//localhost:3000')


document.getElementById('uosername'),
    document.getElementById('massege'),
    document.getElementById('send')

socket.addEventListener(clik, () => {
    socket.emit(messege), {
        uosername: uosername.value,
        messege: massege.value,
    }
})
socket.on(newmass, function (data) {
    console.log(data);
})
