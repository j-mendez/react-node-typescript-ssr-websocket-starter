import { createElement as e } from "react";
import { hydrate } from "react-dom";
import App from "./app";

hydrate(e(App), document.getElementById("root"));
