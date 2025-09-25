chrome.storage.sync.get(["hostname", "position"], (data) => {
  const hostname = data.hostname || null;
  const position = data.position || "top-left";

  if (!hostname) return;

  const overlay = document.createElement("div");
  overlay.id = "hostname-overlay";
  overlay.classList.add(position);
  overlay.textContent = `Kiosk: ${hostname}`;
  document.body.appendChild(overlay);
});
