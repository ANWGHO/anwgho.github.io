document.addEventListener("DOMContentLoaded", function() {
    const customImage = document.getElementById('custom-image');
    const body = document.body;

    const bodyRect = body.getBoundingClientRect();
    const bodyWidth = body.scrollWidth;
    const bodyHeight = body.scrollHeight;
    
    const imageWidth = customImage.offsetWidth || 120;
    const imageHeight = customImage.offsetHeight || 120;

    const maxX = Math.max(0, bodyWidth - imageWidth);
    const maxY = Math.max(0, bodyHeight - imageHeight);
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    customImage.style.left = `${randomX}px`;
    customImage.style.top = `${randomY}px`;
    
    console.log(`Body dimensions: ${bodyWidth}x${bodyHeight}`);
    console.log(`Image position: ${randomX}, ${randomY}`);
});
