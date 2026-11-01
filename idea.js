const ART_SELECTOR = '.stones';
const BUTTON_SELECTOR = '[data-breathe]';
const LABEL_SELECTOR = '[data-breath-label]';
const BREATHING_CLASS = 'is-breathing';
const PHRASES = ['Nádych', 'Výdych'];
const PHASE_MS = 4000;
const LABEL_START = 'Spomaliť dych';
const LABEL_STOP = 'Zastaviť';

const art = document.querySelector(ART_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);
const label = document.querySelector(LABEL_SELECTOR);
let timer = null;
let phase = 0;

function showPhase() {
  label.textContent = PHRASES[phase % PHRASES.length];
  phase += 1;
}

function start() {
  phase = 0;
  showPhase();
  timer = setInterval(showPhase, PHASE_MS);
}

function stop() {
  clearInterval(timer);
  label.textContent = '';
}

button.addEventListener('click', () => {
  const active = art.classList.toggle(BREATHING_CLASS);
  button.setAttribute('aria-pressed', String(active));
  button.textContent = active ? LABEL_STOP : LABEL_START;
  if (active) start();
  else stop();
});
