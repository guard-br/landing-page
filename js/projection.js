document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    
    // Auto-rotation by default
    let isDragging = false;
    let startX = 0;
    let currentRotation = 45; // Initial slightly angled view
    let autoRotate = true;
    let autoRotateSpeed = 0.5;

    // Animation Loop
    function animate() {
        if (autoRotate && !isDragging) {
            currentRotation += autoRotateSpeed;
            if (scene) {
              scene.style.transform = `rotateY(${currentRotation}deg)`;
            }
        }
        requestAnimationFrame(animate);
    }
    
    animate();

    // Interaction for manual rotation
    const container = document.querySelector('.projection-section');
    if (!container) return;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        autoRotate = false;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        autoRotate = false;
    }, {passive: true});

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const diff = x - startX;
        currentRotation += diff * 0.5; // Sensitivity
        if (scene) {
          scene.style.transform = `rotateY(${currentRotation}deg)`;
        }
        startX = x;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX;
        const diff = x - startX;
        currentRotation += diff * 0.5; 
        if (scene) {
            scene.style.transform = `rotateY(${currentRotation}deg)`;
        }
        startX = x;
    }, {passive: true});

    window.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
        // Optional: Resume auto-rotation after release, or stay still. 
        // Let's stay still to allow user to inspect.
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
});
