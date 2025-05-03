// Optional: Handle load events or debugging
const video = document.getElementById('halfVideo');

video.addEventListener('loadeddata', () => {
  console.log('Half-screen video loaded and playing.');
});
