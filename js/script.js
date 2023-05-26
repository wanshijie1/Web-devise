window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.2)';/*设置下滑时的透明度*/ 
    } else {
        header.style.backgroundColor = 'rgba(51, 51, 51, 1)';/*设置不下滑时的透明度*/ 
    }
});
