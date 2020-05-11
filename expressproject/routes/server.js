const express = require('express')
const app = express()


app.get('/name/:name', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.name == ':name') next('route');
    // otherwise pass the control to the next middleware function in this stack
    else next(); //
  }, function (req, res, next) {
    // render a regular page
    res.render('regular');
  });
  
  // handler for the /user/:id path, which renders a special page
  app.get('/name/:name', function (req, res, next) {
    res.render('special');
  });

app.listen(4242, function () {
  console.log('Example app listening on port 4242!')
})