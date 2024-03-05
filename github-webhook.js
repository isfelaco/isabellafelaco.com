const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const payload = req.body;

  // Validate the request (e.g., verify signature)

  // Process the payload
  const eventName = req.headers["x-github-event"];
  console.log(`Received GitHub event: ${eventName}`);

  // Perform actions based on the event
  if (eventName === "push") {
    console.log("Changes pushed to repository:", payload.repository.full_name);
    // Pull changes from GitHub using a shell command
    exec("git pull origin main", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error pulling changes: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Git stderr: ${stderr}`);
        return;
      }
      console.log(`Git stdout: ${stdout}`);
      // Perform other actions after pulling changes
    });
  }

  // Send response
  res.status(200).send("Webhook received successfully");
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
