import express from "express";
import http from "http";
import WebSocket from "ws";
import { join, resolve } from "path";
import { AddressInfo } from "net";

import {
  getRandomItemFromList,
  buildReactTemplateStream,
  callHandlerEveryN
} from "@app/server/utils";
import { MESSAGES_PER_SECOND, NUM_ITEMS } from "@app/server/config";
import { PORT } from "@app/common/config";

const app = express();

app.use("/static", express.static(join(__dirname, "public")));
app.use("/build", express.static(resolve(__dirname, "../../", "dist")));

app.get("*", function(req, res) {
  buildReactTemplateStream(res);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function(ws) {
  let destroy;

  ws.on("message", function(message) {
    if (message === "feed") {
      destroy = callHandlerEveryN(function() {
        if (ws.readyState === 1) {
          ws.send(
            JSON.stringify({
              id: Math.floor(Math.random() * NUM_ITEMS),
              value: Math.floor(Math.random() * NUM_ITEMS),
              name: getRandomItemFromList()
            })
          );
        }
      }, 1000 / MESSAGES_PER_SECOND);
    }
  });

  ws.on("close", function() {
    if (destroy) {
      destroy();
      destroy = null;
    }
  });
});

const application = server.listen(PORT, function() {
  console.log("Listening on %d", (application.address() as AddressInfo).port);
});

export default application;
