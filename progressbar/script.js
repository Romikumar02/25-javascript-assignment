const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');

function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateProgressBar);
