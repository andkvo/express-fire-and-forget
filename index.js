const axios = require('axios');
const startSubject = require('./subject');
const startMonitor = require('./monitor');
const logEvent = require('./logEvent');

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection at: ", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (error, origin) => {
  console.error("Unhandled exception: ", error, "Exception origin: ", origin);
  process.exit(1);
});

(async () => {
  await startSubject();
  await startMonitor();
  logEvent("Application", "Beginning first request to subject...");
  const firstResponseComplete = await axios.get('http://localhost:8900/await');
  logEvent("Application", "First request to subject complete.");
  logEvent("Application", "Beginning second request to subject...");
  const secondResponseComplete = await axios.get('http://localhost:8900/fire-and-forget');
  logEvent("Application", "Second request to subject complete.");
})()