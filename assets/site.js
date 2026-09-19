/* Projects page — filter tabs. Shows/hides sections by data-cat. */
(function () {
  var tabs = document.querySelectorAll('[data-filter]');
  var sections = document.querySelectorAll('[data-cat]');
  if (!tabs.length) return;

  function apply(filter) {
    sections.forEach(function (s) {
      s.style.display = (filter === 'all' || s.getAttribute('data-cat') === filter) ? '' : 'none';
    });
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-filter') === filter);
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      apply(t.getAttribute('data-filter'));
    });
  });

  apply('all');
})();
