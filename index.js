const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(remainingSeconds).padStart(2, '0')}`;
};

const createTimerAnimator = () => {
  let intervalId = null;

  return (seconds) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let currentTime = seconds;

    intervalId = setInterval(() => {
      timerEl.textContent = formatTime(currentTime);

      if (currentTime === 0) {
        clearInterval(intervalId);
      } else {
        currentTime -= 1;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D+/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
