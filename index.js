const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const enteredValueEl = document.querySelector('.entered-value');

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    remainingSeconds.toString().padStart(2, '0'),
  ].join(':');
};

const createTimerAnimator = () => {
  let intervalId = null;

  return (seconds) => {
    clearInterval(intervalId);
    let currentTime = seconds;

    intervalId = setInterval(() => {
      timerEl.textContent = formatTime(currentTime);
      currentTime = currentTime > 0 ? currentTime - 1 : 0;
    }, 1000);
  };
};

const startTimer = () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  enteredValueEl.textContent =
    seconds === 1 ? '1 second' : `${seconds} seconds`;
  inputEl.value = '';
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D+/g, '');
});

inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    startTimer();
  }
});

buttonEl.addEventListener('click', startTimer);
