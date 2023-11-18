let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};



const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snowflakes = [];
function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Random size for each snowflake
            speed: Math.random() + 0.5 // Random falling speed
        });
    }
}
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveSnowflakes();
}
function moveSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        snowflake.y += snowflake.speed;
        
        // If snowflake reaches bottom, reset its position to the top
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
        }
    }
}
function animateSnow() {
    drawSnowflakes();
    requestAnimationFrame(animateSnow);
}
createSnowflakes();
animateSnow();

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  window.location.href = 'index.html'; // Navigate to the 'index.html' page
});