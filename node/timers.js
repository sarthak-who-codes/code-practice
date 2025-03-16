const timerCallback = (a) => {
	console.log(`The timer was supposed run down ${a} ms later, but it as run on ${Date.now() - startTime} ms later, which means it was delayed by ${Date.now() - startTime - a} ms`)
}
const startTime = Date.now();

// Third argument is passed to timerCallback function
setTimeout(timerCallback, 0, 0)
setTimeout(timerCallback, 1, 1, )
setTimeout(timerCallback, 300, 300)
setTimeout(timerCallback, 100, 100)

for(let i = 0; i < 100_00_000_000; i++) {}