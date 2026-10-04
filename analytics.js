/* Google Analytics 4
   To turn tracking on, paste your Measurement ID between the quotes below
   (it looks like G-XXXXXXXXXX), then save. Nothing is tracked while it is empty. */
var GA_MEASUREMENT_ID = 'G-QE1JS1JBGF';

(function () {
  if (!GA_MEASUREMENT_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
})();
