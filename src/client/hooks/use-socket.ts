import { useEffect } from "react";
import { User } from "@app/common/types";

const useSocket = (cb: (a: any) => void): void => {
  useEffect(() => {
    const client = new WebSocket(`ws://127.0.0.1:7770`);

    client.onopen = () => {
      client.send("feed");
    };

    client.onmessage = (message: { data: string | User }) => {
      if (message?.data) {
        try {
          cb(<User>JSON.parse(message.data as string));
        } catch (e) {
          console.error(e);
        }
      }
    };

    return () => {
      client.close();
    };
  }, []);
};

export { useSocket };
