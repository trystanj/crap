var crap = require("../");
var config = require("./crap.verbose.config.js");

crap.load.controllers(config, function(err, controllers) {
  console.log('done..');
  console.log(
    JSON.stringify(controllers, null, 2)
  );
});

