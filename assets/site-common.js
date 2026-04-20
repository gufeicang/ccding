(function () {
  function normalizePath(path) {
    if (!path) return 'index.html';
    path = path.split('#')[0].split('?')[0];
    path = path.substring(path.lastIndexOf('/') + 1);
    return path || 'index.html';
  }

  function detectKey() {
    var bodyKey = document.body && document.body.getAttribute('data-page');
    if (bodyKey) return bodyKey;
    var path = normalizePath(window.location.pathname);
    var map = {
      'index.html': 'home',
      'Profile.html': 'profile',
      'Profile-chinese.html': 'chinese',
      'Publication.html': 'publications',
      'Honors Awards.html': 'honors',
      'Academic Activities.html': 'activities',
      'Contact.html': 'contact',
      'AI_COURSE.html': 'ai-course'
    };
    return map[path] || 'home';
  }

  function syncNav() {
    var key = detectKey();
    var nodes = document.querySelectorAll('.site-top-nav .site-nav-item');
    nodes.forEach(function (node) {
      node.classList.remove('site-nav-current');
      if (node.getAttribute('data-nav-key') === key) {
        node.classList.add('site-nav-current');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', syncNav);
})();
