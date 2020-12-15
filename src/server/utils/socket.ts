function callHandlerEveryN(handler: Function, durationMs: number) {
  let pendingTimeout: ReturnType<typeof setTimeout>;

  (function helper() {
    const startTime = Date.now();
    handler();
    pendingTimeout = setTimeout(
      helper,
      Math.max(0, durationMs + startTime - Date.now())
    );
  })();

  return function destroy() {
    clearTimeout(pendingTimeout);
  };
}

export { callHandlerEveryN };
