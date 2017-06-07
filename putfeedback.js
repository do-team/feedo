var feedback = require("./feedback.json");
var newfeedback = require("./incomingfeedback.json");

//console.log(feedback.items[0].feedbacks[0]);
console.log("Incoming feedback: " + JSON.stringify(newfeedback));
console.log("How many locations for this date of training: " + feedback.items.length);
console.log("In which location are we going to add a feedback: " + feedback.items[0].location);
console.log("Amount of existing feedbacks: " + feedback.items[0].feedbacks.length);
feedback.items[0].feedbacks.push(newfeedback);
console.log("Amount of existing feedbacks after push: " + feedback.items[0].feedbacks.length);
console.log("Complete feedback after pushing new one in: " + JSON.stringify(feedback));