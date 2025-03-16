console.log("start");
const fs = require("node:fs");

const readCallback = (err, data) => {
	 console.log(`readCallback: ${data}`);
}

const f = "file.txt";

fs.readFile(f, readCallback);

setImmediate(() => {
	console.log("setImmediate");
})

console.log("end");