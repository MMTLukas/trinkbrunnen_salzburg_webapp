/**
 * Document finished loading starts app
 */

$(document).ready(function() {
  if (navigator.appVersion.indexOf("Mobile") < 0) {
    $('#slider').nivoSlider({
      effect: 'fade',
      animSpeed: 800,
      pauseTime: 5000,
      directionNav: false,
      controlNav: false,
      pauseOnHover: false
    });
  }

  window.Trinkbrunnen = new AppRouter;
  window.Trinkbrunnen.init();
});

function logEvent(event) {
  console.log(event.type);
}

window.applicationCache.addEventListener('checking', logEvent, false);
window.applicationCache.addEventListener('noupdate', logEvent, false);
window.applicationCache.addEventListener('downloading', logEvent, false);
window.applicationCache.addEventListener('cached', logEvent, false);
window.applicationCache.addEventListener('updateready', logEvent, false);
window.applicationCache.addEventListener('obsolete', logEvent, false);
window.applicationCache.addEventListener('error', logEvent, false); 