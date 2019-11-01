const express = require('express');
const logEvent = require('./logEvent');

module.exports = () => {
  return new Promise(resolve => {
    const app = express();

    app.get('/ten-second-process', (req, res) => {
      const taskName = req.query.task;

      setTimeout(() => {
        logEvent("Monitor", `Task Complete: ${taskName}`);
        return res.json({ status: 'done', task: taskName });
      }, 10000);
    });

    app.listen(8901, () => {
      logEvent("Monitor", "Listening.");
      resolve();
    });
  });
}