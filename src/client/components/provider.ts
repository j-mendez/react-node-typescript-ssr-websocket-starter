import { createElement as e, FunctionComponent } from "react";
import { AppProps } from "@app/common/types";

declare global {
  interface Window {
    __INITIAL__DATA__: any;
  }
}

interface ProviderProps extends AppProps {
  children?: FunctionComponent<any>;
}

const Provider: FunctionComponent<ProviderProps> = ({ children }) => {
  return e(
    children,
    typeof window !== "undefined" ? window?.__INITIAL__DATA__?.props : {}
  );
};

export { Provider };
