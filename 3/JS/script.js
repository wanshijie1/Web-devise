window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    var opacity = 1 - (scrollTop + windowHeight - documentHeight) / windowHeight;
    footer.style.opacity = opacity.toFixed(2);
  });
  
 
