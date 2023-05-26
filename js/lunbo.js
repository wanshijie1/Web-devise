const images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;
const maxImageIndex = images.length - 1;

function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex === maxImageIndex) ? 0 : currentImageIndex + 1;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000); // 每3秒切换一次图片
