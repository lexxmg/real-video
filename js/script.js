
'use strict';

const video = document.querySelector('.main-content__video'),
      start = document.querySelector('.start-js'),
      stop = document.querySelector('.stop-js'),
      time = document.querySelector('.main-content__time');


start.addEventListener('click', () => {
  video.play();
});

stop.addEventListener('click', () => {
  video.pause();
});

video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;

  time.textContent = currentTime;

  if (currentTime > 41.41799667899906 && currentTime < 58.18126962800209) {
    time.style.color = 'red';
  } else if (currentTime >= 58.18126962800209) {
    time.style.color = 'black';
  }
});
