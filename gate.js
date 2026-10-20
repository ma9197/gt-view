/* Password wall. config.js only holds the Google client encrypted (PBKDF2-SHA256 -> AES-GCM-256),
   so the app is useless without the password. Unlocked once per device, then remembered.
   ponytail: client-side gate, its strength is the password's strength; a server would be the upgrade. */
(function () {
  var C = window.GT_CONFIG, KEY = "gt.unlock", app = document.getElementById("app");

  function boot(creds) {
    Object.assign(C, creds);
    var s = document.createElement("script"); s.src = "app.js"; document.body.appendChild(s);
  }
  try { var saved = JSON.parse(localStorage.getItem(KEY)); if (saved && saved.CLIENT_ID) return boot(saved); } catch (e) {}

  function b(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
  function unlock(pw) {
    var E = C.ENC;
    return crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"])
      .then(function (k) { return crypto.subtle.deriveKey({ name: "PBKDF2", salt: b(E.salt), iterations: E.iter, hash: "SHA-256" }, k, { name: "AES-GCM", length: 256 }, false, ["decrypt"]); })
      .then(function (k) { return crypto.subtle.decrypt({ name: "AES-GCM", iv: b(E.iv) }, k, b(E.data)); })
      .then(function (buf) { return JSON.parse(new TextDecoder().decode(buf)); });
  }

  app.innerHTML =
    '<style>.lock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}' +
    '.lock h1{margin:0;font-size:34px}.lock p{margin:0;color:var(--ink2);font-size:20px}' +
    '.lock input,.lock button{width:380px;height:64px;border-radius:32px;font:600 24px system-ui,sans-serif;text-align:center}' +
    '.lock input{background:var(--card);color:var(--ink);border:2px solid var(--line)}' +
    '.lock button{background:var(--card)}.lock :focus{background:#fff;color:#000;box-shadow:var(--glow)}' +
    '.lock #msg{min-height:26px;color:var(--accent)}</style>' +
    '<div class="lock"><h1>GlassTube</h1><p>Enter password</p>' +
    '<input id="pw" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="go">' +
    '<button id="go">Unlock</button><p id="msg"></p></div>';
  var pw = document.getElementById("pw"), go = document.getElementById("go"), msg = document.getElementById("msg"), busy = false;

  function tryIt() {
    // forgiving: the glasses keyboard may add capitals or spaces
    var v = pw.value.toLowerCase().replace(/\s+/g, "");
    if (!v) { pw.focus(); return; }
    if (busy) return; // Enter fires both keydown and change
    busy = true; msg.textContent = "Checking...";
    unlock(v).then(function (creds) {
      try { localStorage.setItem(KEY, JSON.stringify(creds)); } catch (e) {}
      app.innerHTML = ""; boot(creds);
    }, function () { busy = false; pw.value = ""; msg.textContent = "Wrong password"; pw.focus(); });
  }
  // glasses: Enter on the box opens the composer, which fires "change" when done (no per-key events)
  pw.addEventListener("change", tryIt);
  go.addEventListener("click", tryIt);
  document.addEventListener("keydown", function (e) {
    if (!document.getElementById("pw")) return; // unlocked, app.js owns the keys now
    if (e.key === "ArrowDown") { e.preventDefault(); go.focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); pw.focus(); }
  });
  pw.focus();
})();
