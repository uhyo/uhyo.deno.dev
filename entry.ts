addEventListener("fetch", (event) => {
  const response = new Response("uhyohyo", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});