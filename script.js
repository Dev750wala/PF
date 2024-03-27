const glowCircle = document.querySelector('.glow-circle');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;

  const circleX = mouseX + scrollX - glowCircle.clientWidth / 2;
  const circleY = mouseY + scrollY - glowCircle.clientHeight / 2;

  glowCircle.style.top = `${circleY}px`;
  glowCircle.style.left = `${circleX}px`;
});
