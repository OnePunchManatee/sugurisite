function scatterImages() {
    const images = document.querySelectorAll('.scatter-image');
    
    images.forEach((img) => {
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        // Set initial position with transform only (no left/top)
        img.style.transform = `translate(${startX}px, ${startY}px)`;
        img.style.transform = `translate(500px, 500px)`;
        
        // Random scatter direction
        const angle = Math.random() * Math.PI * 2;
        const distance = 800 + Math.random() * 400;
        
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        // Scatter off screen
        setTimeout(() => {
            img.style.transform = `translate(${startX + endX}px, ${startY + endY}px)`;
            img.style.opacity = '0';
        }, 10);
    });
}

window.addEventListener('load', scatterImages);