(function () {
  const docEl = document.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = function () {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    const htmlFontSize = 100 * (clientWidth / 750);
    docEl.style.fontSize = htmlFontSize + 'px';
  };
  if (!document.addEventListener) {
    return;
  }
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
})();
