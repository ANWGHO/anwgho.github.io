document.addEventListener("DOMContentLoaded", function() {
    const customImage = document.getElementById('custom-image');

    // 随机设置图片初始位置
    const maxX = window.innerWidth - customImage.offsetWidth;
    const maxY = window.innerHeight - customImage.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    customImage.style.left = `${randomX}px`;
    customImage.style.top = `${randomY}px`;
})
