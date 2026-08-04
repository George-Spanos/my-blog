// Dark/light toggle. The initial theme is applied by an inline script in <head>
// so the page never paints in the wrong colours; this only handles the click.
document.getElementById("theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", dark ? "#1d1f21" : "#fafafa");
});
