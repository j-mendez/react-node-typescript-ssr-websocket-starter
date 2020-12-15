import { FunctionComponent } from "react";
import { Response } from "express";
import { AppProps } from "@app/common/types";
declare const buildReactTemplateStream: (res: Response, props?: AppProps, Component?: FunctionComponent<AppProps>) => void;
export { buildReactTemplateStream };
