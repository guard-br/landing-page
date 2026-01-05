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
    if (container) {
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
        });

        window.addEventListener('touchend', () => {
            isDragging = false;
        });
    }

    // --- State Toggling Logic ---
    const btnCorrect = document.getElementById('btn-correct');
    const btnIncorrect = document.getElementById('btn-incorrect');
    const statusText = document.getElementById('status-text');
    const sceneElement = document.querySelector('.scene');

    function setCorrectState() {
        sceneElement.classList.remove('state-incorrect');
        sceneElement.classList.add('state-correct');
        
        btnCorrect.classList.add('active');
        btnIncorrect.classList.remove('active');
        
        statusText.textContent = "Status: PROTEGIDO";
        statusText.className = "status-text correct";
    }

    function setIncorrectState() {
        sceneElement.classList.remove('state-correct');
        sceneElement.classList.add('state-incorrect');
        
        btnIncorrect.classList.add('active');
        btnCorrect.classList.remove('active');
        
        statusText.textContent = "Status: VULNERÁVEL (Uso Indevido)";
        statusText.className = "status-text incorrect";
    }

    if (btnCorrect && btnIncorrect) {
        btnCorrect.addEventListener('click', setCorrectState);
        btnIncorrect.addEventListener('click', setIncorrectState);
    }
});