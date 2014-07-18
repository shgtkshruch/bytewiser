process.stdin.on('data', function (buf) {
  var ui8 = new Uint8Array(buf.length);
  for (var i = 0; i < buf.length; i++) {
    ui8[i] = buf[i];
  }
  console.log(JSON.stringify(ui8));
})
