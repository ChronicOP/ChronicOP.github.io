// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const drops = Array(Math.floor(canvas.width/10)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0ff';
    ctx.font = '15px monospace';

    drops.forEach((drop, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 10, drop * 10);
        drops[i] = drop > canvas.height/10 || Math.random() > 0.95 ? 0 : drop + 1;
    });
}

// Terminal Text Animation
const terminalText = document.querySelector('.terminal-text');
let text = terminalText.getAttribute('data-text');
let index = 0;

function typeText() {
    terminalText.textContent = text.slice(0, index++);
    if(index > text.length) index = 0;
}

// Event Listeners
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start Animations
setInterval(drawMatrix, 50);
setInterval(typeText, 200);