// js/main.js
import { loadVerbs } from './data.js';
import { checkAnswer, getFeedbackMessage, updateLevel } from './srs.js';
import { renderCard, showFeedback, showNextButton, hideNextButton, updateLevelDisplay } from './ui.js';

let verbs = [];
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
  verbs = await loadVerbs();
  startSession();
});

function startSession() {
  currentIndex = 0;
  renderCard(verbs[currentIndex]);
  updateLevelDisplay(verbs[currentIndex]);
  setupEventHandlers();
}

function setupEventHandlers() {
  document.getElementById('checkBtn').addEventListener('click', () => {
    const presentInput = document.getElementById('presentInput');
    const pastInput = document.getElementById('pastInput');
    const currentVerb = verbs[currentIndex]; // Add this line to define currentVerb
    const result = checkAnswer(currentVerb, presentInput, pastInput);

    updateLevel(currentVerb, result);
    showFeedback(getFeedbackMessage(result), result);
    showNextButton();
    updateLevelDisplay(currentVerb);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % verbs.length;
    renderCard(verbs[currentIndex]);
    updateLevelDisplay(verbs[currentIndex]);
    hideNextButton();
  });
}
