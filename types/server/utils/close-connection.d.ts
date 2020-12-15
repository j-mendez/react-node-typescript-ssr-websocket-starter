import type { Server } from "http";
declare const closeConnection: (application: Server) => Promise<unknown>;
export { closeConnection };
