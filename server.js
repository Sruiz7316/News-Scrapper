const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/routing/htmlRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;

// Makes code readable//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes)

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




// Create a generic function to handle requests and responses
// function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  // response.end("It Works!! Path Hit: " + request.url);
// }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

  // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });