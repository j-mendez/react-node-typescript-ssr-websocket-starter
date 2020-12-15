import { FunctionComponent } from "react";
import { AppProps } from "@app/common/types";
declare global {
    interface Window {
        __INITIAL__DATA__: any;
    }
}
interface ProviderProps extends AppProps {
    children?: FunctionComponent<any>;
}
declare const Provider: FunctionComponent<ProviderProps>;
export { Provider };
