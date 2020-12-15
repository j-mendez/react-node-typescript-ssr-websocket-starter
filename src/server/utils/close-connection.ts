import type { Server } from "http";

const closeConnection = (application: Server) => {
  return new Promise((resolve) => {
    application.close(() => {
      resolve(true);
    });
  });
};

export { closeConnection };
