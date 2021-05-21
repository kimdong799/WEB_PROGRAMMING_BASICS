(function (window, document) {
    'use strict';
  
    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
    
    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
          toggle.classList.toggle('on');
        });
      }

    $toggleBtn.addEventListener('click', function () {
      toggleElements();
    });
})(window, document);