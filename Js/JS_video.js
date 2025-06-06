// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playBtn');
  const videoFrame = document.getElementById('videoFrame');

  if (playBtn && videoFrame) {
    playBtn.addEventListener('click', () => {
      videoFrame.style.display = 'block';
      playBtn.closest('.video-thumbnail').style.display = 'none';
    });
  }
});
