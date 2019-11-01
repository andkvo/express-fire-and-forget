const express = require('express');
const axios = require('axios');
const logEvent = require('./logEvent');

module.exports = () => {
  return new Promise(resolve => {
    const app = express();

    app.get('/await', async (req, res, next) => {
      try {
        logEvent("Subject", "Beginning sync request (synchronous communication with monitor server)...");
        console.time('syncRequestTook');
        const firstResponse = await axios.get('http://localhost:8901/ten-second-process?task=await');
        console.timeEnd('syncRequestTook');
        return res.json({ event: 'subject done', response: firstResponse.data });
      }
      catch(err) {
        next(err);
      }
    });

    app.get('/fire-and-forget', async (req, res, next) => {
      try {
        logEvent("Subject", "Beginning fire-and-forget request (asynchronous communication with monitor server)...");
        console.time('fireAndForgetRequestTook');
        const firstResponse = axios.get('http://localhost:8901/ten-second-process?task=fire-and-forget');
        console.timeEnd('fireAndForgetRequestTook');
        return res.json({ event: 'subject done', response: firstResponse.data });
      }
      catch(err) {
        next(err);
      }
    });

    app.listen(8900, () => {
      logEvent("Subject", "Listening.");
      resolve();
    });
  });
}