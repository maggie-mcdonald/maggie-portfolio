import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const lib = require('messagemedia-messages-sdk');

/* Basic Auth */
lib.Configuration.basicAuthUserName = "ACde9bd7c7189887eaced1bd645f08be50";
lib.Configuration.basicAuthPassword = "80134b960f5047931dc1df001c46b66c";

/* HMAC
lib.Configuration.hmacAuthUserName = "YOUR_HMAC_API_KEY";
lib.Configuration.hmacAuthPassword = "YOUR_HMAC_SECRET_KEY";
*/

var controller = lib.MessagesController;

let body = new lib.SendMessagesRequest();

body.messages = [];

body.messages[0] = new lib.Message();

body.messages[0].content = 'Hello world!';
body.messages[0].destinationNumber = '+614';

controller.sendMessages(body, function(error, response, context) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});