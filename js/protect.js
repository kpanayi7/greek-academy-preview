/* Discourages casual saving of the children's photographs.
 *
 * IMPORTANT, for whoever maintains this: this is a deterrent, not protection. Any image on a
 * public web page has already been downloaded by the browser in order to display it, so a
 * screenshot, the browser's network tab, or simply opening the image URL all still work. Treat
 * it as a speed bump against a casual right-click-and-save, not as a safeguarding control. The
 * controls that actually matter are consent for publication, and the noimageindex tag that keeps
 * these photographs out of image search.
 *
 * Scoped to images so the rest of the page keeps a working context menu — parents can still
 * right-click a link to open it in a new tab, or copy the term dates.
 */
(function () {
  'use strict';

  var GUARDED = 'img, picture, .gallery-grid, .photo, .hero-photo';

  function isGuarded(target) {
    return target && typeof target.closest === 'function' && target.closest(GUARDED);
  }

  document.addEventListener('contextmenu', function (e) {
    if (isGuarded(e.target)) e.preventDefault();
  });

  // Dragging an image straight to the desktop is the other one-gesture save.
  document.addEventListener('dragstart', function (e) {
    if (isGuarded(e.target)) e.preventDefault();
  });
})();
