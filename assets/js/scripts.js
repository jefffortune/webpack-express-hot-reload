import $ from '../vendor/jquery-1.11.2.min';

export default function (window) {
  const element = document.createElement('h1');

  element.innerHTML = 'Hello Johnny!*$^';

  // Execute code once the DOM is ready. $(document).ready() not required within Drupal.behaviors.

  $(window).load(function () {
    // Execute code once the window is fully loaded.
  });

  $(window).resize(function () {
    // Execute code when the window is resized.
  });

  $(window).scroll(function () {
    // Execute code when the window scrolls.
  });
  return element;

} (this);