const DESTINATION_URL = 'https://www.youtube.com/';
const slider = document.querySelector('#continue-slider');
const shell = document.querySelector('#slider-shell');
const status = document.querySelector('#status');
let completed = false;
let dragging = false;

function update(value) {
  slider.value = String(value);
  shell.style.setProperty('--progress', Number(slider.value) / 100);
}

function complete() {
  if (completed) return;
  completed = true;
  update(100);
  status.textContent = 'Abrindo o YouTube…';
  window.location.assign(DESTINATION_URL);
}

function reset() {
  if (completed) return;
  shell.classList.add('resetting');
  update(0);
}

function move(event) {
  const bounds = shell.getBoundingClientRect();
  const travel = bounds.width - 66;
  const value = Math.max(0, Math.min(100, (event.clientX - bounds.left - 33) / travel * 100));
  update(value);
  if (value >= 100) complete();
}

slider.addEventListener('pointerdown', event => {
  if (completed || !event.isPrimary || event.button !== 0) return;
  event.preventDefault();
  slider.focus();
  const bounds = shell.getBoundingClientRect();
  // A tap on the far end must not count as a completed slide.
  if (event.clientX - bounds.left > 70) return;
  shell.classList.remove('resetting');
  dragging = true;
  slider.setPointerCapture(event.pointerId);
});
slider.addEventListener('pointermove', event => {
  if (dragging && !completed) move(event);
});
slider.addEventListener('pointerup', () => { dragging = false; reset(); });
slider.addEventListener('pointercancel', () => { dragging = false; reset(); });
slider.addEventListener('lostpointercapture', () => { dragging = false; reset(); });
slider.addEventListener('input', () => {
  update(slider.value);
  if (Number(slider.value) === 100) complete();
});
slider.addEventListener('blur', reset);
