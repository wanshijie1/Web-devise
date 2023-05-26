 // JavaScript代码
 window.addEventListener('DOMContentLoaded', function() {
    var isFirstVisit = sessionStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
      var popupContainer = document.getElementById('popup-container');
      var closeButton = document.getElementById('close-button');

      popupContainer.style.display = 'block';

      closeButton.addEventListener('click', function() {
        popupContainer.style.display = 'none';
        sessionStorage.setItem('isFirstVisit', 'true');
      });
    }
  });