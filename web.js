const express = require('express');
const app = express();

const newBaseURL = process.env.NEW_BASE_URL || 'http://example.com';
const redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
const redirectToRoot = process.env.REDIRECT_TO_ROOT === 'true'
const port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  if (redirectToRoot) {
    response.redirect(redirectStatus, newBaseURL);
  } else {
    response.redirect(redirectStatus, newBaseURL + request.url);
  }
});

app.listen(port, function() {
  console.log("Listening on " + port);
});