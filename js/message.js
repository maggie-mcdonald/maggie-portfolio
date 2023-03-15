//messaging capability
const phone = document.getElementById("#phone");
var twilio = require(`twilio`);
var client = new twilio(`ACde9bd7c7189887eaced1bd645f08be50`, `80134b960f5047931dc1df001c46b66c`);

client.messages.create({
  to: `6789530470`,
  from: `+18885984519`,
  body: `Hey Maggie! I like your portfolio, let's talk about how you would be a great addition to our team.`
});

phone.addEventListener("click", function (e) {
  e.preventDefault();
  client.sendMessage();
});
