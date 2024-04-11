function logHtml(log) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<p>${log}</p>`;
}

export { logHtml };
