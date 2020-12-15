import { FunctionComponent } from "react";

interface User {
  id: number;
  value: number;
  name: string;
}

type AppProps = {
  error?: Error;
  data?: User[];
  children?: FunctionComponent<any>;
};

export { User, AppProps };
