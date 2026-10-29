(function () {
  var root = document.documentElement, btn = document.getElementById('themeBtn');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var theme = saved || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-bs-theme', theme);
  if (btn) btn.addEventListener('click', function () {
    theme = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  });
  // close mobile menu after clicking a link
  document.querySelectorAll('#nv .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      var el = document.getElementById('nv');
      if (el.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(el).hide();
    });
  });
})();
// image zoom (certificates + resume)
function zoom(id) {
  var src = document.querySelector('[data-img="' + id + '"]');
  if (!src) return;
  document.getElementById('lbi').src = src.src;
  bootstrap.Modal.getOrCreateInstance(document.getElementById('lb')).show();
}
