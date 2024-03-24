var jwt = require("jsonwebtoken");

const mySecret = "s3cr3T";

// During signin
var token = jwt.sign(
	{ user: "Rahul Makhija", email: "rahul@example.com", userId: 3 },
	mySecret,
	{
		expiresIn: 5,
	}
);

console.log(token);

// during each request
try {
	const decoded = jwt.verify(token, mySecret);
	console.log("decoded: ", decoded);
	time += delay;
} catch (e) {
	console.log("Error:JWT:", e?.message);
	clearInterval(interval);
}

// testing token expiration interval example
let time = 0;
const delay = 1000;
const TOTAL_TIME = 60 * 1000;
const interval = setInterval(() => {
	if (time < TOTAL_TIME) {
		try {
			const decoded = jwt.verify(token, mySecret);
			console.log("decoded: ", decoded);
			time += delay;
		} catch (e) {
			console.log("Error:JWT:", e?.message);
			clearInterval(interval);
		}
	} else {
		clearInterval(interval);
	}
}, delay);
