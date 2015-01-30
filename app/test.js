var webPage = require('webpage');
var server = require('webserver').create();

var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };

console.log("Starting PhantomJS");

page.open("http://www.google.com", function start(status) {
});

console.log("Starting Server 2");

server.listen(8080, function(request, response) {
  console.log("Request!");
  //page.render('google_hon0me.jpeg', {format: 'jpeg', quality: '100'});
  response.statusCode = 200;
  response.write("created") //TODO write out string from render
  response.close();
});
