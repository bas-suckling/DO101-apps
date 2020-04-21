const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = '<h1>This is version 3 of the app.</h1>' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/test2', function (req, res) {

  response = 'This is version 3 of the app on the test2 route.' + '\n';

  //send the response to the client
  res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
