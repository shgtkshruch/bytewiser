process.stdin.on('data', function (buf) {
  for (var i = 0; i < buf.length; i++) {
    if (buf[i] === 0x2e) buf[i] = 0x21
  }
  console.log(buf);
})
