module.exports = function(processName, message) {
  console.log(`${Date.now()} [${processName}]: ${message}`);
}