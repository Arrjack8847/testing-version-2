/* Golden Autumn Heritage — Scene 1 cinematic opening; no dependencies. */
(() => {
  'use strict';
  const scene = document.querySelector('.scene');
  const openButton = document.getElementById('openInvitation');
  const replayButton = document.getElementById('replayInvitation');
  const panel = document.getElementById('revealPanel');
  const heading = document.getElementById('invitationHeading');
  const leafField = document.getElementById('leafField');
  const scatterField = document.getElementById('scatterField');
  if (!scene || !openButton || !replayButton || !panel || !heading || !leafField || !scatterField) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const assets = [
    './assets/scene-1/11_autumn_maple_leaf.png',
    './assets/scene-1/12_golden_autumn_leaf.png',
    './assets/scene-1/13_copper_autumn_leaf.png'
  ];
  let state = 'idle';
  let openingTimer = null;
  let seed = 1729;
  const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

  function makeAmbientLeaves() {
    leafField.replaceChildren();
    if (reducedMotion.matches) return;
    for (let i = 0; i < 9; i++) {
      const leaf = document.createElement('img');
      leaf.className = 'drift-leaf';
      leaf.src = assets[i % assets.length];
      leaf.alt = '';
      leaf.decoding = 'async';
      leaf.setAttribute('aria-hidden', 'true');
      leaf.style.setProperty('--x', (4 + rand() * 92) + '%');
      leaf.style.setProperty('--size', (11 + rand() * 15) + 'px');
      leaf.style.setProperty('--duration', (12 + rand() * 10) + 's');
      leaf.style.setProperty('--delay', (-rand() * 23) + 's');
      leaf.style.setProperty('--drift', ((rand() - .5) * 180) + 'px');
      leaf.style.setProperty('--spin', (rand() > .5 ? 1 : -1) * Math.round(150 + rand() * 290) + 'deg');
      leafField.appendChild(leaf);
    }
  }

  function scatterLeaves(x, y, count = 9) {
    if (reducedMotion.matches) return;
    for (let i = 0; i < count; i++) {
      const leaf = document.createElement('img');
      leaf.className = 'scatter-leaf';
      leaf.src = assets[i % assets.length];
      leaf.alt = '';
      leaf.setAttribute('aria-hidden', 'true');
      leaf.style.setProperty('--x', x + '%');
      leaf.style.setProperty('--y', y + '%');
      leaf.style.setProperty('--size', (13 + rand() * 16) + 'px');
      leaf.style.setProperty('--duration', (1050 + rand() * 800) + 'ms');
      leaf.style.setProperty('--dx', ((rand() - .5) * 300) + 'px');
      leaf.style.setProperty('--dy', (-50 + rand() * 260) + 'px');
      leaf.style.setProperty('--rotation', ((rand() - .5) * 650) + 'deg');
      leaf.addEventListener('animationend', () => leaf.remove(), { once: true });
      scatterField.appendChild(leaf);
    }
  }

  function completeOpening() {
    if (state !== 'opening') return;
    state = 'opened';
    openingTimer = null;
    scene.classList.remove('is-opening');
    scene.classList.add('is-opened');
    panel.setAttribute('aria-hidden', 'false');
    heading.focus({ preventScroll: true });
  }

  function openInvitation() {
    if (state !== 'idle') return;
    state = 'opening';
    panel.hidden = false;
    panel.setAttribute('aria-hidden', 'true');
    openButton.disabled = true;
    openButton.setAttribute('aria-expanded', 'true');
    if (reducedMotion.matches) {
      completeOpening();
      return;
    }
    scene.classList.add('is-opening');
    scatterLeaves(50, 72, 12);
    openingTimer = window.setTimeout(completeOpening, 3000);
  }

  function replayInvitation() {
    if (openingTimer !== null) window.clearTimeout(openingTimer);
    openingTimer = null;
    state = 'idle';
    scene.classList.remove('is-opening', 'is-opened');
    panel.hidden = true;
    panel.setAttribute('aria-hidden', 'true');
    openButton.disabled = false;
    openButton.setAttribute('aria-expanded', 'false');
    scatterField.replaceChildren();
    openButton.focus({ preventScroll: true });
  }

  openButton.addEventListener('click', openInvitation);
  replayButton.addEventListener('click', replayInvitation);
  scene.addEventListener('pointerdown', event => {
    if (state !== 'idle' || event.target.closest('button')) return;
    const rect = scene.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    scatterLeaves(x, y, 3);
  });
  document.addEventListener('visibilitychange', () => {
    scene.classList.toggle('is-background', document.hidden);
  });
  reducedMotion.addEventListener('change', () => {
    makeAmbientLeaves();
    if (reducedMotion.matches && state === 'opening') {
      if (openingTimer !== null) window.clearTimeout(openingTimer);
      completeOpening();
    }
  });
  makeAmbientLeaves();
})();
