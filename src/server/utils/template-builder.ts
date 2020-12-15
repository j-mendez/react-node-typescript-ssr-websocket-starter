import { renderToNodeStream } from "react-dom/server";
import { createElement as e, FunctionComponent } from "react";
import { Response } from "express";
import { AppProps } from "@app/common/types";
import App from "@app/client/app";

const buildReactTemplateStream = (
  res: Response,
  props: AppProps = {},
  Component: FunctionComponent<AppProps> = App
): void => {
  const nodeStream = renderToNodeStream(e(Component, props));

  const head = `<!DOCTYPE html>
  <html>
  <head>
	<title>React Realtime${props?.error ? "Error Page" : ""}</title>
	<link rel="stylesheet" type="text/css" href="/static/css/style.css">
  <script>window.__INITIAL__DATA__ = ${JSON.stringify({ props })}</script>
  </head>
  <body>
  <div id="root">`;

  res.write(head);

  nodeStream.pipe(res, { end: false });

  nodeStream.on("end", () => {
    res.write(`</div><script src="/build/app.js"></script></body></html>`);
    res.end();
  });
};

export { buildReactTemplateStream };
