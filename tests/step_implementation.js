var frisby = require("frisby");

step("Call httpbin.org and get a teapot", function (done) {
  frisby.get('http://httpbin.org/status/418')
    .timeout(2000)
    .expect('status', 418)
    .catch(function (e) {
      done(e);
    })
    .done(done);
});