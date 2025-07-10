// js/ui.js

// Render the current verb card
export function renderCard(verb) {
  const jpText = document.getElementById('jpText');
  const presentInput = document.getElementById('presentInput');
  const pastInput = document.getElementById('pastInput');
  const feedback = document.getElementById('feedback');

  jpText.textContent = `${verb['jp-present']} / ${verb['jp-past']}`;
  presentInput.value = '';
  pastInput.value = '';
  feedback.textContent = '';
  feedback.className = '';
  presentInput.focus();
}

// Show feedback text and color
export function showFeedback(message, result) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;

  if (result.bothCorrect) {
    feedback.className = 'correct';
  } else if (result.present || result.past) {
    feedback.className = 'partial';
  } else {
    feedback.className = 'incorrect';
  }
}

// Show the "Next" button
export function showNextButton() {
  document.getElementById('nextBtn').style.display = 'block';
}

// Hide the "Next" button
export function hideNextButton() {
  document.getElementById('nextBtn').style.display = 'none';
}

// Update level display info
export function updateLevelDisplay(verb) {
  const levelText = document.getElementById('levelInfo');
  levelText.textContent = `Level: ${verb.level} ・ Attempts: ${verb.attempts}`;
}
