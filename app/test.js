var webPage = require('webpage');
var server = require('webserver').create();

var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };

page.open("http://www.google.com", function start(status) {
});

server.listen(8080, function(request, response) {
  page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});

  response.statusCode = 200;
  response.write("created") //TODO write out string from render
});
