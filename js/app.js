document.getElementById("customForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const codename = data.get("codename");
  const style = data.get("style");
  const status = document.getElementById("formStatus");
  status.textContent = `> TRANSMISSION ACCEPTED // ${codename} // ${style}`;
  event.currentTarget.reset();
});
