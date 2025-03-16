console.log("start");
for (let i =0; i< 1000000000; i++);
setTimeout(()=> console.log("timer"), 0);
setImmediate(() => console.log("immediate"));
process.nextTick( ()=>console.log("nextTick()")) 
console.log ("end");
