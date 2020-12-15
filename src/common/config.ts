const PORT = process.env.NODE_ENV === "test" ? 0 : process.env.PORT || 7770;
const API_URL =
  process.env.NODE_ENV !== "production" ? "127.0.0.1" : process.env.API_URL;
const WEB_SOCKET_URL =
  process.env.NODE_ENV !== "production"
    ? `ws://127.0.0.1:7770`
    : process.env.WEB_SOCKET_URL;

export { API_URL, PORT, WEB_SOCKET_URL };
