// Progressive enhancement: add/remove child sections, per-child returning + allergy reveals.
// Server-side validation in lib/validate.php is authoritative and mirrors these rules.
(function () {
  var form = document.querySelector('form[action="submit.php"]');
  if (!form) return;

  function setRequired(container, on) {
    container.querySelectorAll('[data-req]').forEach(function (el) { el.required = on; });
  }

  // Per-child conditional blocks. Child sections: child1 lives in its own fieldset (always
  // visible); child2/child3 fieldsets have ids child2-section/child3-section.
  function syncChild(i) {
    var scope = i === 1 ? form : document.getElementById('child' + i + '-section');
    if (!scope) return;
    var visible = i === 1 || !scope.hidden;

    var ret = form.querySelector('input[name="child' + i + '_new_to_academy"]:checked');
    var showRet = visible && ret && ret.value === 'No';
    form.querySelectorAll('.returning-only[data-child="' + i + '"]').forEach(function (el) {
      el.hidden = !showRet; setRequired(el, showRet);
    });

    var alg = form.querySelector('input[name="child' + i + '_has_allergy"]:checked');
    var showAlg = visible && alg && alg.value === 'Yes';
    form.querySelectorAll('.allergy-only[data-child="' + i + '"]').forEach(function (el) {
      el.hidden = !showAlg; setRequired(el, showAlg);
      if (!showAlg) {
        el.querySelectorAll('input[type="file"]').forEach(function (f) { f.value = ''; });
      }
    });

    // radios + base fields in hidden sections must not block submit
    if (i > 1) {
      scope.querySelectorAll('input[data-req], select[data-req], textarea[data-req]').forEach(function (el) {
        if (!el.closest('.returning-only') && !el.closest('.allergy-only')) el.required = visible;
      });
    }
  }
  [1, 2, 3].forEach(function (i) {
    ['_new_to_academy', '_has_allergy'].forEach(function (suffix) {
      form.querySelectorAll('input[name="child' + i + suffix + '"]').forEach(function (r) {
        r.addEventListener('change', function () { syncChild(i); });
      });
    });
  });

  // Add / remove child sections
  var addBtn = document.getElementById('add-child');
  function sections() {
    return [2, 3].map(function (i) { return document.getElementById('child' + i + '-section'); });
  }
  function syncAddButton() {
    if (addBtn) addBtn.hidden = sections().every(function (s) { return s && !s.hidden; });
  }
  if (addBtn) {
    addBtn.addEventListener('click', function () {
      var next = sections().find(function (s) { return s && s.hidden; });
      if (!next) return;
      next.hidden = false;
      syncChild(next.id === 'child2-section' ? 2 : 3);
      syncAddButton();
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  form.querySelectorAll('.remove-child').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var i = parseInt(btn.getAttribute('data-child'), 10);
      var section = document.getElementById('child' + i + '-section');
      if (!section) return;
      section.hidden = true;
      section.querySelectorAll('input, select, textarea').forEach(function (el) {
        if (el.type === 'radio' || el.type === 'checkbox') el.checked = false;
        else if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else el.value = '';
      });
      syncChild(i);
      syncAddButton();
    });
  });

  [1, 2, 3].forEach(syncChild);
  syncAddButton();
})();
