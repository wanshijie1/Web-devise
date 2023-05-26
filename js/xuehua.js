document.addEventListener('DOMContentLoaded', function () {
    const snowflakes = document.getElementById('snowflakes');
    const numSnowflakes = 200; // 设置数量

    function createSnowflake() {
      const snowflake = document.createElement('span');
      snowflake.innerHTML = '❄';
      snowflake.className = 'snowflake';

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      snowflake.style.left = x + 'px';
      snowflake.style.top = y + 'px';

      snowflakes.appendChild(snowflake);

      const duration = Math.random() * 5 + 5;

      snowflake.style.animationDuration = duration + 's';

      snowflake.addEventListener('animationend', function () {
        snowflake.remove();
        createSnowflake();
      });
    }

    function createSnowflakes() {
      for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
      }
    }

    createSnowflakes();
  });