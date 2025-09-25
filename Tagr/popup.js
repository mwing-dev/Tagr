document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("kioskName");
  const urlInput = document.getElementById("targetUrl");
  const positionSelect = document.getElementById("position");
  const saveBtn = document.getElementById("saveBtn");

  chrome.storage.sync.get(["hostname", "targetUrl", "position"], (data) => {
    if (data.hostname) nameInput.value = data.hostname;
    if (data.targetUrl) urlInput.value = data.targetUrl;
    if (data.position) positionSelect.value = data.position;
  });

  saveBtn.addEventListener("click", () => {
    const hostname = nameInput.value.trim();
    const targetUrl = urlInput.value.trim();
    const position = positionSelect.value;

    chrome.storage.sync.set({ hostname, targetUrl, position }, () => {
      if (targetUrl) {
        chrome.tabs.create({ url: targetUrl });
      }
    });
  });
});
