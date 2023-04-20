const server = require("./api/server");

const port = 9000;

server.listen(port, () => {
  console.log("server is listening on", port);
});

console.log("hello world 111");
// START YOUR SERVER HERE
